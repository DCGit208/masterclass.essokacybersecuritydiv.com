# Audio Setup for CEH Elite V13 Video

## Quick Start

### 1. Add Background Music
Download a royalty-free cyberpunk/epic track and save as:
```
public/audio/epic-background.mp3
```

**Recommended free sources:**
- Pixabay Music: https://pixabay.com/music/search/cyberpunk/
- Free Music Archive: https://freemusicarchive.org/search?quicksearch=cyberpunk
- YouTube Audio Library: https://studio.youtube.com/channel/UC.../music

**What to search for:**
- "cyberpunk background music"
- "epic technology music"
- "dark ambient tech"
- Duration: 60+ seconds

### 2. Generate AI Voiceover (Optional)

**Setup ElevenLabs:**
```bash
# Get API key from https://elevenlabs.io (free tier: 10k characters/month)
# Create .env.local file:
echo "ELEVENLABS_API_KEY=your_key_here" > .env.local

# Generate voiceovers for all 5 scenes:
node video/generate-voiceover.js
```

This creates:
- `public/audio/scene1-problem.mp3`
- `public/audio/scene2-gap.mp3`
- `public/audio/scene3-elite.mp3`
- `public/audio/scene4-transformation.mp3`
- `public/audio/scene5-cta.mp3`

**Or record your own voice:**
1. Read the script from VIDEO-SCRIPT-CEH-V13-ELITE.md
2. Save as MP3 files with same names above
3. Place in `public/audio/`

## Current Audio Setup

✅ **Background music** - Loops throughout entire 60 seconds at 30% volume  
✅ **Scene 3 voiceover** - Plays during Elite Difference section at 80% volume  
✅ **Award certificate image** - Fades in during Scene 3 with gold glow

## Test the Video

```bash
npm run video:preview
```

If you don't have audio files yet:
- Background music won't play (video continues silently)
- Scene 3 voiceover won't play (text animations still work)
- Award certificate image will display

## Audio Timing

| Scene | Duration | Audio Type | Volume |
|-------|----------|-----------|--------|
| 1. Problem | 0-8s | Background only | 30% |
| 2. Gap | 8-15s | Background only | 30% |
| 3. Elite | 15-30s | Background + Voiceover | 30% + 80% |
| 4. Transformation | 30-45s | Background only | 30% |
| 5. CTA | 45-60s | Background only | 30% |

## Add More Voiceovers

To add voiceover to other scenes, edit `video/CEHEliteVideo.tsx`:

```tsx
{frame >= scene1End && frame < scene2End && (
  <>
    <Scene2 frame={frame - scene1End} fps={fps} colors={colors} />
    <Audio
      src="/audio/scene2-gap.mp3"
      startFrom={(frame - scene1End) / fps}
      volume={0.8}
    />
  </>
)}
```

## Troubleshooting

**No audio in preview?**
- Check files exist: `ls -lh public/audio/`
- Verify file names match exactly
- Browser may mute autoplay - click unmute button

**Audio out of sync?**
- Adjust `startFrom` value (in seconds)
- Preview specific frame: Click timeline at 15s mark

**Volume too loud/quiet?**
- Background music: Change `volume={0.3}` (0.0 to 1.0)
- Voiceover: Change `volume={0.8}` (0.0 to 1.0)

## Render with Audio

```bash
npm run video:render
```

Final MP4 will include all audio tracks mixed together.
