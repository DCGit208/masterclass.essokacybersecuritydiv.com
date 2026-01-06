# CEH Elite V13 - Programmatic Video Generation

## Overview
This video is created programmatically using **Remotion** - a framework for creating videos with React components. The video matches your exact brand colors and implements the 5-scene conversion script.

## Video Specifications
- **Duration**: 60 seconds (1800 frames at 30fps)
- **Resolution**: 1920x1080 (Full HD)
- **Format**: MP4
- **Brand Colors**: 
  - Dark: #0a0e27
  - Accent (Cyan): #00f0ff
  - Gold: #ffd700
  - Red: #ff4444

## 5 Scenes (60 seconds)

### Scene 1: The Problem (0-8s)
- "ACCESS DENIED" glitch effect
- "You passed CEH. But when it's time to deliver—you freeze."
- "Theory ≠ Real-World Execution"

### Scene 2: The Gap (8-15s)
- Split screen comparison
- Left: Regular CEH (red-themed, negative)
- Right: CEH Elite V13 (cyan-themed, positive)
- "43 new V13 attack vectors"

### Scene 3: Elite Difference (15-30s)
- Stats grid: 12 weeks, Real infrastructure, Global Instructor, 20 slots
- Your name and EC-Council award
- "This isn't a course. It's an immersion."

### Scene 4: Transformation (30-45s)
- Before/After salary: $65K SOC Analyst → $110K Penetration Testing Lead
- Stats: 95% pass rate, $40K avg salary increase
- "'certified' to CONFIDENT"

### Scene 5: CTA (45-60s)
- Pulsing "APPLY NOW" button
- Application deadline: January 25, 2026
- Cohort start: February 10, 2026
- "Only 20 slots available"

## How to Use

### Preview the Video (Live Development)
```bash
npm run video:preview
```
This opens a browser at http://localhost:3000 where you can:
- See the video playing in real-time
- Scrub through timeline
- Edit components and see changes instantly
- Adjust timing and animations

### Render the Final Video
```bash
npm run video:render
```
This will:
- Render all 1800 frames (60 seconds at 30fps)
- Output to: `public/ceh-elite-hero-video.mp4`
- Takes 5-10 minutes depending on your machine
- Can be used directly in your hero section

## Customization

### Edit Video Content
All video logic is in: `video/CEHEliteVideo.tsx`

Change text, colors, timing, animations by editing the component.

### Change Duration
In `video/Root.tsx`, adjust:
```typescript
durationInFrames={1800} // 60 seconds at 30fps
// Change to 2700 for 90 seconds, etc.
```

### Update Dynamic Props
In `video/Root.tsx`, the `defaultProps` object controls:
- instructorName
- awardTitle
- deadline
- cohortStart
- maxSlots

These values are pulled from your config and displayed in the video.

## Integration with Landing Page

Once rendered, update `config/ceh-elite-v13.ts`:
```typescript
media: {
  heroVideoUrl: "/ceh-elite-hero-video.mp4",
  ogImage: "/og-ceh-elite.jpg",
}
```

The video will automatically display in the hero section using HTML5 video player with:
- Auto-play (muted)
- Loop
- No controls (clean look)
- Fallback poster image

## Advanced Features

### Add Real Footage
Replace animated scenes with actual screen recordings:

1. Record iLabs session, terminal work, student testimonials
2. Convert to video files
3. Import with Remotion's `<Video>` component:
```tsx
import { Video } from 'remotion';

<Video src="/footage/ilabs-session.mp4" />
```

### Add Background Music
Install audio support:
```bash
npm install @remotion/media-utils
```

Then in any scene:
```tsx
import { Audio } from 'remotion';

<Audio src="/audio/background-music.mp3" volume={0.3} />
```

### Export Different Formats
Render as WebM (smaller file size):
```bash
remotion render video/Root.tsx CEHEliteV13 public/ceh-elite-hero-video.webm --codec=vp9
```

Render specific section (e.g., only CTA scene):
```bash
remotion render video/Root.tsx CEHEliteV13 public/cta-only.mp4 --frames=1350-1800
```

## Performance Optimization

### Faster Rendering
```bash
npm run video:render -- --concurrency=8
```
Uses 8 CPU cores for parallel rendering.

### Lower Quality (for testing)
```bash
npm run video:render -- --quality=50
```
Renders faster with smaller file size.

### Cloud Rendering
For production-quality renders, use Remotion Lambda:
- Renders in 1-2 minutes instead of 10 minutes
- Costs ~$0.50 per video
- Setup: https://www.remotion.dev/docs/lambda

## Troubleshooting

### Preview won't start
Make sure dev server is stopped:
```bash
lsof -ti :3000 | xargs kill -9
```

### Render fails
Check Node.js version (needs 16+):
```bash
node --version
```

### Video doesn't show on page
Check file exists:
```bash
ls -lh public/ceh-elite-hero-video.mp4
```

Update config to point to correct path.

## Next Steps

1. **Preview first**: `npm run video:preview` to see it in browser
2. **Edit if needed**: Adjust text, timing, colors in `video/CEHEliteVideo.tsx`
3. **Render final**: `npm run video:render` to create MP4
4. **Deploy**: Video in `/public` gets deployed automatically with site

## Resources

- Remotion Docs: https://www.remotion.dev/docs
- Examples: https://www.remotion.dev/showcase
- Community: https://remotion.dev/discord
