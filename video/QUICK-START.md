# 🎬 One-Command Video Generation

## Fully Automated - Just Watch It Work

```bash
cd video
python3 auto-generate-video.py
```

That's it! The script will:

1. ✅ Install all dependencies automatically
2. ✅ Download 5 professional stock videos from Pexels (free)
3. ✅ Generate all 5 scenes with real footage
4. ✅ Add your background music
5. ✅ Display your award certificate
6. ✅ Render final 60-second MP4

**Time:** 5-10 minutes  
**Output:** `public/ceh-elite-hero-video-v2.mp4`  
**Size:** ~8-12MB with real footage

---

## What Happens Automatically

### STEP 1: Download Stock Footage (1-2 min)
- Hacker typing on keyboard
- Code on screen
- Server room
- Network visualization
- Cybersecurity concept

All footage cached in `video/stock-footage/` for instant re-runs.

### STEP 2: Generate Scenes (1 min)
- Scene 1: The Problem (hacker footage)
- Scene 2: The Gap (code footage)
- Scene 3: Elite Solution (server room)
- Scene 4: Transformation (network)
- Scene 5: CTA (security)

### STEP 3: Combine & Transition (30 sec)
- Professional fade transitions
- Smooth scene flow

### STEP 4: Add Audio (30 sec)
- Background music at 30% volume
- Loops for full 60 seconds

### STEP 5: Render Final Video (5-8 min)
- 1920x1080 Full HD
- 30fps smooth playback
- H.264 codec
- AAC audio

---

## After Generation

### Preview
```bash
open ../public/ceh-elite-hero-video-v2.mp4
```

### Deploy (if satisfied)
```bash
cd ..
mv public/ceh-elite-hero-video-v2.mp4 public/ceh-elite-hero-video.mp4
npm run build
git add -A
git commit -m "feat: Upgrade hero video with real stock footage"
git push
```

Page auto-updates with new video!

---

## Customization

Want to tweak something? Edit `auto-generate-video.py`:

- **Line 54-78**: Change stock footage URLs
- **Line 140-156**: Edit Scene 1 text
- **Line 158-184**: Edit Scene 2 split screen
- **Line 186-223**: Edit Scene 3 stats
- **Line 225-255**: Edit Scene 4 before/after
- **Line 257-285**: Edit Scene 5 CTA

Then re-run - footage is cached so regeneration is instant!

---

## Troubleshooting

**"No module named moviepy"**
```bash
pip3 install moviepy requests Pillow numpy
```

**"Download failed"**
Check internet connection. Script will use cached footage if available.

**"Render too slow"**
Lower quality in line 333: change `preset='medium'` to `preset='fast'`

**"File size too large"**
Reduce bitrate by adding to line 327:
```python
bitrate='5000k'
```

---

## What You Get

✅ Professional video with **real footage**  
✅ Same proven 5-scene structure  
✅ Your music & award certificate  
✅ Production quality for high-ticket offer  
✅ Ready to deploy in under 10 minutes  

No manual editing. No learning curve. Just run and watch! ☕
