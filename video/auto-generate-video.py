#!/usr/bin/env python3
"""
Fully Automated CEH Elite V13 Video Generator
Just run and watch - everything happens automatically
"""

import os
import sys
import time
import requests
from pathlib import Path

print("🎬 CEH Elite V13 Video Generator - Fully Automated")
print("=" * 70)

# Check and import dependencies
print("\n📦 Loading dependencies...")
try:
    from moviepy import VideoFileClip, ImageClip, TextClip, ColorClip, CompositeVideoClip, concatenate_videoclips, AudioFileClip, vfx
    print("✅ All dependencies loaded")
except ImportError as e:
    print(f"❌ Missing dependencies: {e}")
    print("\nPlease install required packages:")
    print("  pip3 install --break-system-packages moviepy requests Pillow numpy")
    print("\nOr use a virtual environment:")
    print("  python3 -m venv venv")
    print("  source venv/bin/activate")
    print("  pip install moviepy requests Pillow numpy")
    sys.exit(1)

# Configuration
VIDEO_DIR = Path(__file__).parent
PUBLIC_DIR = VIDEO_DIR.parent / "public"
OUTPUT_VIDEO = PUBLIC_DIR / "ceh-elite-hero-video-v2.mp4"
AUDIO_PATH = PUBLIC_DIR / "audio" / "epic-background.mp3"
AWARD_IMAGE = PUBLIC_DIR / "Global Instructor award.png"
FOOTAGE_DIR = VIDEO_DIR / "stock-footage"
VIDEO_WIDTH = 1920
VIDEO_HEIGHT = 1080
FPS = 30

# Create footage directory
FOOTAGE_DIR.mkdir(exist_ok=True)

# Free stock footage URLs (Pexels - no attribution required for these)
STOCK_FOOTAGE = {
    "hacker": {
        "url": "https://videos.pexels.com/video-files/5473877/5473877-uhd_2560_1440_25fps.mp4",
        "file": FOOTAGE_DIR / "hacker.mp4",
        "description": "Hacker typing on keyboard"
    },
    "code": {
        "url": "https://videos.pexels.com/video-files/4252830/4252830-uhd_2560_1440_25fps.mp4",
        "file": FOOTAGE_DIR / "code.mp4",
        "description": "Code on screen"
    },
    "server": {
        "url": "https://videos.pexels.com/video-files/7534197/7534197-uhd_2560_1440_25fps.mp4",
        "file": FOOTAGE_DIR / "server.mp4",
        "description": "Server room"
    },
    "network": {
        "url": "https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_30fps.mp4",
        "file": FOOTAGE_DIR / "network.mp4",
        "description": "Network visualization"
    },
    "security": {
        "url": "https://videos.pexels.com/video-files/6963751/6963751-uhd_2560_1440_24fps.mp4",
        "file": FOOTAGE_DIR / "security.mp4",
        "description": "Cybersecurity concept"
    }
}

def download_footage(name, info):
    """Download stock footage if not already cached"""
    if info["file"].exists():
        print(f"✅ {name.capitalize()} footage already cached")
        return True
    
    print(f"⏳ Downloading {info['description']}...")
    try:
        response = requests.get(info["url"], stream=True, timeout=30)
        response.raise_for_status()
        
        total_size = int(response.headers.get('content-length', 0))
        downloaded = 0
        
        with open(info["file"], 'wb') as f:
            for chunk in response.iter_content(chunk_size=8192):
                if chunk:
                    f.write(chunk)
                    downloaded += len(chunk)
                    if total_size > 0:
                        progress = (downloaded / total_size) * 100
                        print(f"\r   Progress: {progress:.1f}%", end='', flush=True)
        
        print(f"\r✅ {name.capitalize()} footage downloaded ({downloaded / (1024*1024):.1f}MB)")
        return True
    except Exception as e:
        print(f"\r❌ Failed to download {name}: {e}")
        return False

def create_text_overlay(text, duration, fontsize=60, color="white", position="center", 
                        bg_color=(10, 14, 39), bg_opacity=0.8):
    """Create professional text overlay with background"""
    txt = TextClip(
        text=text,
        font_size=fontsize,
        color=color,
        font="Arial-Bold",
        size=(VIDEO_WIDTH - 200, None),
        method='caption'
    )
    
    # Background
    bg = ColorClip(size=(txt.w + 100, txt.h + 40), color=bg_color)
    bg = bg.set_opacity(bg_opacity)
    
    composite = CompositeVideoClip([bg, txt.set_position("center")])
    composite = composite.set_duration(duration).set_position(position)
    
    return composite

def create_scene_with_footage(footage_key, duration, overlays, bg_color=(10, 14, 39)):
    """Create scene with colored background and text overlays"""
    # Use solid color background (stock footage disabled due to API requirements)
    bg_video = ColorClip(size=(VIDEO_WIDTH, VIDEO_HEIGHT), color=bg_color, duration=duration)
    
    return CompositeVideoClip([bg_video] + overlays)

def generate_scene_1(duration=8):
    """Scene 1: The Problem with real hacker footage"""
    print("⏳ Generating Scene 1: The Problem...")
    
    main_text = create_text_overlay(
        "You passed CEH.\nBut when it's time to deliver—\nyou freeze.",
        duration,
        fontsize=70,
        color="#00f0ff"
    )
    
    problem = create_text_overlay(
        "Theory ≠ Real-World Execution",
        duration - 2,
        fontsize=50,
        color="#ff4444",
        position=("center", 800)
    ).set_start(2)
    
    scene = create_scene_with_footage("hacker", duration, [main_text, problem], bg_color=(15, 20, 45))
    print("✅ Scene 1 complete")
    return scene

def generate_scene_2(duration=7):
    """Scene 2: The Gap with code footage"""
    print("⏳ Generating Scene 2: The Gap...")
    
    # Split screen effect
    left_overlay = ColorClip(size=(VIDEO_WIDTH//2, VIDEO_HEIGHT), color=(80, 30, 30))
    left_overlay = left_overlay.set_opacity(0.7).set_position((0, 0))
    
    right_overlay = ColorClip(size=(VIDEO_WIDTH//2, VIDEO_HEIGHT), color=(0, 60, 80))
    right_overlay = right_overlay.set_opacity(0.7).set_position((VIDEO_WIDTH//2, 0))
    
    regular_text = create_text_overlay(
        "Regular CEH\n\n❌ Theory-heavy\n❌ No real labs\n❌ Outdated tools",
        duration,
        fontsize=45,
        color="#ff6666",
        position=((VIDEO_WIDTH//4 - 300), 300)
    )
    
    elite_text = create_text_overlay(
        "CEH Elite V13\n\n✓ 43 new vectors\n✓ Real infrastructure\n✓ Enterprise ready",
        duration,
        fontsize=45,
        color="#00f0ff",
        position=((VIDEO_WIDTH*3//4 - 300), 300)
    )
    
    scene = create_scene_with_footage("code", duration, [left_overlay, right_overlay, regular_text, elite_text], bg_color=(10, 14, 39))
    print("✅ Scene 2 complete")
    return scene

def generate_scene_3(duration=15):
    """Scene 3: Elite Solution with server room footage"""
    print("⏳ Generating Scene 3: Elite Solution...")
    
    overlays = []
    
    # Stats grid
    stats = [
        ("12 Weeks", (300, 250)),
        ("Real Infrastructure", (VIDEO_WIDTH - 500, 250)),
        ("Global Instructor", (300, 600)),
        ("20 Slots Only", (VIDEO_WIDTH - 500, 600))
    ]
    
    for stat_text, pos in stats:
        stat_clip = create_text_overlay(stat_text, duration, fontsize=50, color="#ffd700", bg_opacity=0.9)
        stat_clip = stat_clip.set_position(pos)
        overlays.append(stat_clip)
    
    # Instructor
    instructor_text = create_text_overlay(
        "Dr. Coach Achu Gustave\nEC-Council Global Instructor of the Year 2022",
        duration,
        fontsize=45,
        color="#00f0ff",
        position=("center", 100)
    )
    overlays.append(instructor_text)
    
    # Award certificate
    if AWARD_IMAGE.exists():
        award = ImageClip(str(AWARD_IMAGE)).set_duration(duration - 5)
        award = award.resize(width=600)
        
        # Add gold glow effect
        glow = ColorClip(size=(620, award.h + 20), color=(255, 215, 0))
        glow = glow.set_opacity(0.3)
        award_with_glow = CompositeVideoClip([glow, award.set_position("center")])
        
        award_with_glow = award_with_glow.set_position(("center", 850)).set_start(5)
        award_with_glow = award_with_glow.with_effects([vfx.FadeIn(1)])
        overlays.append(award_with_glow)
    
    scene = create_scene_with_footage("server", duration, overlays, bg_color=(12, 18, 40))
    print("✅ Scene 3 complete")
    return scene

def generate_scene_4(duration=15):
    """Scene 4: Transformation with network footage"""
    print("⏳ Generating Scene 4: Transformation...")
    
    before = create_text_overlay(
        "BEFORE\n\n$65K\nSOC Analyst\n\nStuck in theory",
        duration,
        fontsize=50,
        color="#ff6666",
        position=(200, 300)
    )
    
    arrow = create_text_overlay(
        "→",
        duration,
        fontsize=120,
        color="#ffd700",
        position=("center", 450),
        bg_opacity=0
    )
    
    after = create_text_overlay(
        "AFTER\n\n$110K\nPenetration Testing Lead\n\nReal-world expert",
        duration,
        fontsize=50,
        color="#00f0ff",
        position=(VIDEO_WIDTH - 700, 300)
    )
    
    stats_bottom = create_text_overlay(
        "95% Pass Rate  |  $40K+ Average Increase",
        duration,
        fontsize=45,
        color="#ffd700",
        position=("center", 850)
    )
    
    scene = create_scene_with_footage("network", duration, [before, arrow, after, stats_bottom], bg_color=(10, 15, 35))
    print("✅ Scene 4 complete")
    return scene

def generate_scene_5(duration=15):
    """Scene 5: CTA with security footage"""
    print("⏳ Generating Scene 5: CTA...")
    
    # Pulsing button (simulated with scaling animation)
    button_text = TextClip(
        text="APPLY NOW",
        font_size=90,
        color="#000000",
        font="Arial-Bold"
    )
    button_bg = ColorClip(size=(button_text.w + 100, button_text.h + 40), color=(255, 215, 0))
    button = CompositeVideoClip([button_bg, button_text.set_position("center")])
    button = button.set_duration(duration).set_position(("center", 400))
    
    deadline = create_text_overlay(
        "Application Deadline: January 25, 2026\nCohort Starts: February 10, 2026",
        duration,
        fontsize=50,
        color="#00f0ff",
        position=("center", 600)
    )
    
    slots = create_text_overlay(
        "⚠️  ONLY 20 SLOTS AVAILABLE  ⚠️",
        duration,
        fontsize=55,
        color="#ff4444",
        position=("center", 150)
    )
    
    scene = create_scene_with_footage("security", duration, [slots, button, deadline], bg_color=(8, 12, 35))
    print("✅ Scene 5 complete")
    return scene

def main():
    start_time = time.time()
    
    # Step 1: Generate scenes (using colored backgrounds)
    print("\n🎨 STEP 1: Generating Scenes")
    print("-" * 70)
    
    scene1 = generate_scene_1(8)
    scene2 = generate_scene_2(7)
    scene3 = generate_scene_3(15)
    scene4 = generate_scene_4(15)
    scene5 = generate_scene_5(15)
    
    # Step 2: Combine
    print("\n🎬 STEP 2: Combining Scenes")
    print("-" * 70)
    print("⏳ Adding transitions...")
    
    final_video = concatenate_videoclips([
        scene1.with_effects([vfx.FadeOut(0.5)]),
        scene2.with_effects([vfx.FadeIn(0.5), vfx.FadeOut(0.5)]),
        scene3.with_effects([vfx.FadeIn(0.5), vfx.FadeOut(0.5)]),
        scene4.with_effects([vfx.FadeIn(0.5), vfx.FadeOut(0.5)]),
        scene5.with_effects([vfx.FadeIn(0.5)])
    ], method="compose")
    
    # Step 3: Add audio
    if AUDIO_PATH.exists():
        print("🎵 Adding background music...")
        audio = AudioFileClip(str(AUDIO_PATH)).with_volume_scaled(0.3)
        audio = audio.with_duration(final_video.duration)
        final_video = final_video.with_audio(audio)
    
    # Step 4: Render
    print("\n🎥 STEP 3: Rendering Final Video")
    print("-" * 70)
    print(f"Output: {OUTPUT_VIDEO}")
    print("This will take 5-10 minutes. Sit back and relax! ☕")
    print()
    4: Render
    print("\n🎥 STEP 3videofile(
        str(OUTPUT_VIDEO),
        fps=FPS,
        codec='libx264',
        audio_codec='aac',
        temp_audiofile='temp-audio.m4a',
        remove_temp=True,
        preset='medium',
        threads=4,
        verbose=True,
        logger='bar'
    )
    
    # Success summary
    elapsed = time.time() - start_time
    file_size = OUTPUT_VIDEO.stat().st_size / (1024 * 1024)
    
    print("\n" + "=" * 70)
    print("✅ VIDEO GENERATION COMPLETE!")
    print("=" * 70)
    print(f"📁 Output: {OUTPUT_VIDEO}")
    print(f"📊 Size: {file_size:.1f}MB")
    print(f"⏱️  Time: {elapsed/60:.1f} minutes")
    print()
    print("🚀 NEXT STEPS:")
    print("1. Preview: open public/ceh-elite-hero-video-v2.mp4")
    print("2. If satisfied: mv public/ceh-elite-hero-video-v2.mp4 public/ceh-elite-hero-video.mp4")
    print("3. Page auto-updates with new video!")
    print()
    print("💡 TIP: Stock footage is cached in video/stock-footage/")
    print("   Re-run anytime for instant regeneration with changes")

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\n\n⚠️  Generation cancelled by user")
        sys.exit(1)
    except Exception as e:
        print(f"\n\n❌ Error: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)
