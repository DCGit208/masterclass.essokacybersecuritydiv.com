# ECSD Masterclass AI Coding Instructions

## Project Overview
Next.js 14 landing page platform for **Essoka Cybersecurity Division** masterclass programs (masterclass.essokacybersecuritydiv.com). Premium B2B cybersecurity training focused on CEH Elite v13 certification program ($5,000/participant, 20 slots/cohort).

**Tech Stack:** Next.js 14 App Router, TypeScript, Tailwind CSS, Framer Motion, React Hook Form, Remotion (video generation)

## Architecture Patterns

### Configuration-First Design
All program-specific values (dates, pricing, URLs) are centralized in `config/ceh-elite-v13.ts`. **Never hardcode values in components**—always import from config:
```tsx
import { CEH_ELITE_CONFIG } from '@/config/ceh-elite-v13'
const price = CEH_ELITE_CONFIG.price // ✅ Correct
const price = 5000 // ❌ Never do this
```

### Conditional Layout System
Layouts are path-aware via `ConditionalLayout.tsx`. CEH Elite v13 page (`/masterclass/ceh-elite-v13`) renders custom navigation/footer. Homepage uses standard layout. Pattern:
```tsx
// app/layout.tsx uses conditional wrappers
import { ConditionalNavbar, ConditionalFooter } from '@/components/ConditionalLayout'
// No explicit pathname checks in page components
```

### Component Organization
- `components/` - Shared components (Navbar, Footer, Hero)
- `components/ceh/` - Legacy CEH components (v1)
- `components/ceh/v2/` - CEH Elite V13 components (current)
- `components/SEO/` - Schema.org structured data components

When adding CEH features, use `components/ceh/v2/` directory.

### API Routes
Application submissions go to `/api/ceh-application/route.ts`. Currently logs to console—production implementation should integrate database/email service. Response format:
```typescript
{ success: true, message: "Application submitted successfully" }
```

## Styling Conventions

### Cyber Theme Design System
Brand colors defined in `tailwind.config.ts`:
```typescript
cyber: {
  dark: '#0a0e27',    // Primary background
  darker: '#050714',  // Hero/section backgrounds
  accent: '#00f0ff',  // CTAs, links, borders (cyan)
  gold: '#ffd700',    // Premium highlights
  red: '#ff0040'      // Urgency elements
}
```

Typography: Rajdhani (headings), Inter (body). Always use `font-rajdhani` and `font-inter` classes.

### Animation Standards
- Hero sections: `animate-float` for floating elements
- CTAs: `animate-glow` for pulsing effects
- Grid backgrounds: `bg-cyber-grid` pattern overlay
- Transitions: Framer Motion for route/component animations

Example pattern from existing components:
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
```

## Development Workflows

### Running the Application
```bash
npm run dev          # Development server (localhost:3000)
npm run build        # Production build
npm run lint         # ESLint check
```

### Video Generation (Remotion)
Videos are generated programmatically from React components in `video/`:
```bash
npm run video:preview  # Live preview at localhost:3000 (Remotion)
npm run video:render   # Render to public/ceh-elite-hero-video.mp4
```

**Important:** Video generation runs on separate port—stop dev server first or use different terminal. Videos take 5-10 minutes to render.

### Deployment
Primary deployment: Vercel (recommended). See `DEPLOYMENT.md` for DNS configuration. Domain must point to `masterclass.essokacybersecuritydiv.com` subdomain.

## Form Handling

### Multi-Step Application Form
`components/ceh/v2/CEHApplicationForm.tsx` is a 4-step modal form:
1. Personal Info (validation: email format, required fields)
2. Professional Background (dropdowns for experience/salary)
3. Technical Qualification (radio buttons)
4. Motivation & Commitment (textarea min 50 chars)

State management pattern:
```tsx
const [step, setStep] = useState(1)
const validateStep = (currentStep: number): boolean => { /* validation logic */ }
```

Form submits to `/api/ceh-application` with full FormData payload.

## Critical Dependencies

- **date-fns**: Date formatting for countdown timers (use `format()` and `differenceInSeconds()`)
- **framer-motion**: All animations (use `motion.*` components, not raw HTML elements)
- **react-hook-form**: Not currently used but available for simpler forms
- **@remotion/**: Video generation suite (separate from Next.js runtime)

## SEO & Metadata

Root metadata in `app/layout.tsx` includes extensive OpenGraph/keywords for B2B targeting. Use template pattern for page-specific titles:
```tsx
export const metadata: Metadata = {
  title: 'Page Title' // Auto-appends "| ECSD Masterclass"
}
```

Structured data via `components/SEO/BreadcrumbSchema.tsx` for rich snippets.

## Common Gotchas

1. **Config updates**: After changing `config/ceh-elite-v13.ts`, components auto-update—no manual changes needed
2. **Countdown timer**: Uses `countdownTarget` ISO format, not `cohortStartDate` display string
3. **Modal state**: Application form managed in `ApplicationFormWrapper.tsx`—don't create duplicate modal state
4. **Image paths**: Public assets use `/` root path (`/team/dr-achu-gustave.png`), not relative paths
5. **TypeScript strict mode**: All components must have proper type definitions—no `any` types

## Testing Checklist Before Committing

- [ ] All dates/prices imported from config (no hardcoded values)
- [ ] Mobile responsive tested (320px - 1920px)
- [ ] Animations don't block content (use `initial={{ opacity: 0 }}` carefully)
- [ ] Form validation messages display properly
- [ ] Cyber theme colors maintained (no off-brand colors)
- [ ] No console errors in dev tools

## Resources

- Full setup: `README.md`
- Deployment guide: `DEPLOYMENT.md`
- Marketing context: `STRATEGY.md`
- Project status: `PROJECT-SUMMARY.md`
- Video workflow: `video/README.md`
