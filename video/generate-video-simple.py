#!/usr/bin/env python3
"""
CEH Elite V13 Video Generator - Simplified for MoviePy 2.x
No downloads needed - uses colored backgrounds
"""

import os
import sys
import time
from pathlib import Path

print("🎬 CEH Elite V13 Video Generator")
print("=" * 70)

# Check dependencies
print("\n📦 Loading dependencies...")
try:
    from moviepy import (VideoFileClip, ImageClip, TextClip, ColorClip, 
                         CompositeVideoClip, concatenate_videoclips, AudioFileClip, vfx)
    print("✅ All dependencies loaded")
except ImportError as e:
    print(f"❌ Missing dependencies: {e}")
    print("\nInstall with:")
    print("  pip3 install --break-system-packages moviepy")
    sys.exit(1)

# Configuration
VIDEO_DIR = Path(__file__).parent
PUBLIC_DIR = VIDEO_DIR.parent / "public"
OUTPUT_VIDEO = PUBLIC_DIR / "ceh-elite-hero-video-v2.mp4"
AUDIO_PATH = PUBLIC_DIR / "audio" / "epic-background.mp4"
AWARD_IMAGE = PUBLIC_DIR / "Global Instructor award.png"
VIDEO_WIDTH = 1920
VIDEO_HEIGHT = 1080
FPS = 30

def create_text_overlay(text, duration, font_size=60, color="white", position="center", 
                        bg_color=(10, 14, 39), bg_opacity=0.8):
    """Create professional text overlay with background"""
    txt = TextClip(
        text=text,
        font_size=font_size,
        color=color,
        font="Arial-Bold",
        size=(VIDEO_WIDTH - 200, None),
        method='caption'
    )
    
    # Background
    bg = ColorClip(size=(txt.w + 100, txt.h + 40), color=bg_color)
    bg = bg.with_opacity(bg_opacity)
    
    composite = CompositeVideoClip([bg, txt.with_position("center")])
    composite = composite.with_duration(duration).with_position(position)
    
    return composite

def generate_scene_1(duration=8):
    """Scene 1: The Problem"""
    print("⏳ Generating Scene 1: The Problem...")
    
    bg = ColorClip(size=(VIDEO_WIDTH, VIDEO_HEIGHT), color=(15, 20, 45), duration=duration)
    
    main_text = create_text_overlay(
        "You passed CEH.\nBut when it's time to deliver—\nyou freeze.",
        duration,
        font_size=70,
        color="#00f0ff"
    )
    
    problem = create_text_overlay(
        "Theory ≠ Real-World Execution",
        duration - 2,
        font_size=50,
        color="#ff4444",
        position=("center", 800)
    ).with_start(2)
    
    scene = CompositeVideoClip([bg, main_text, problem])
    print("✅ Scene 1 complete")
    return scene

def generate_scene_2(duration=7):
    """Scene 2: The Gap"""
    print("⏳ Generating Scene 2: The Gap...")
    
    bg = ColorClip(size=(VIDEO_WIDTH, VIDEO_HEIGHT), color=(10, 14, 39), duration=duration)
    
    # Split screen
    left_overlay = ColorClip(size=(VIDEO_WIDTH//2, VIDEO_HEIGHT), color=(80, 30, 30), duration=duration)
    left_overlay = left_overlay.with_opacity(0.7).with_position((0, 0))
    
    right_overlay = ColorClip(size=(VIDEO_WIDTH//2, VIDEO_HEIGHT), color=(0, 60, 80), duration=duration)
    right_overlay = right_overlay.with_opacity(0.7).with_position((VIDEO_WIDTH//2, 0))
    
    regular_text = create_text_overlay(
        "Regular CEH\n\n❌ Theory-heavy\n❌ No real labs\n❌ Outdated tools",
        duration,
        font_size=45,
        color="#ff6666",
        position=((VIDEO_WIDTH//4 - 300), 300)
    )
    
    elite_text = create_text_overlay(
        "CEH Elite V13\n\n✓ 43 new vectors\n✓ Real infrastructure\n✓ Enterprise ready",
        duration,
        font_size=45,
        color="#00f0ff",
        position=((VIDEO_WIDTH*3//4 - 300), 300)
    )
    
    scene = CompositeVideoClip([bg, left_overlay, right_overlay, regular_text, elite_text])
    print("✅ Scene 2 complete")
    return scene

def generate_scene_3(duration=15):
    """Scene 3: Elite Solution"""
    print("⏳ Generating Scene 3: Elite Solution...")
    
    bg = ColorClip(size=(VIDEO_WIDTH, VIDEO_HEIGHT), color=(12, 18, 40), duration=duration)
    
    overlays = [bg]
    
    # Stats grid
    stats = [
        ("12 Weeks", (300, 250)),
        ("Real Infrastructure", (VIDEO_WIDTH - 500, 250)),
        ("Global Instructor", (300, 600)),
        ("20 Slots Only", (VIDEO_WIDTH - 500, 600))
    ]
    
    for stat_text, pos in stats:
        stat_clip = create_text_overlay(stat_text, duration, font_size=50, color="#ffd700", bg_opacity=0.9)
        stat_clip = stat_clip.with_position(pos)
        overlays.append(stat_clip)
    
    # Instructor
    instructor_text = create_text_overlay(
        "Dr. Coach Achu Gustave\nEC-Council Global Instructor of the Year 2022",
        duration,
        font_size=45,
        color="#00f0ff",
        position=("center", 100)
    )
    overlays.append(instructor_text)
    
    # Award certificate
    if AWARD_IMAGE.exists():
        award = ImageClip(str(AWARD_IMAGE)).with_duration(duration - 5)
        award = award.resized(width=600)
        
        # Gold glow
        glow = ColorClip(size=(620, award.h + 20), color=(255, 215, 0), duration=duration - 5)
        glow = glow.with_opacity(0.3)
        award_with_glow = CompositeVideoClip([glow, award.with_position("center")])
        
        award_with_glow = award_with_glow.with_position(("center", 850)).with_start(5)
        award_with_glow = award_with_glow.with_effects([vfx.FadeIn(1)])
        overlays.append(award_with_glow)
    
    scene = CompositeVideoClip(overlays)
    print("✅ Scene 3 complete")
    return scene

def generate_scene_4(duration=15):
    """Scene 4: Transformation"""
    print("⏳ Generating Scene 4: Transformation...")
    
    bg = ColorClip(size=(VIDEO_WIDTH, VIDEO_HEIGHT), color=(10, 15, 35), duration=duration)
    
    before = create_text_overlay(
        "BEFORE\n\n$65K\nSOC Analyst\n\nStuck in theory",
        duration,
        font_size=50,
        color="#ff6666",
        position=(200, 300)
    )
    
    arrow = create_text_overlay(
        "→",
        duration,
        font_size=120,
        color="#ffd700",
        position=("center", 450),
        bg_opacity=0
    )
    
    after = create_text_overlay(
        "AFTER\n\n$110K\nPenetration Testing Lead\n\nReal-world expert",
        duration,
        font_size=50,
        color="#00f0ff",
        position=(VIDEO_WIDTH - 700, 300)
    )
    
    stats_bottom = create_text_overlay(
        "95% Pass Rate  |  $40K+ Average Increase",
        duration,
        font_size=45,
        color="#ffd700",
        position=("center", 850)
    )
    
    scene = CompositeVideoClip([bg, before, arrow, after, stats_bottom])
    print("✅ Scene 4 complete")
    return scene

def generate_scene_5(duration=15):
    """Scene 5: CTA"""
    print("⏳ Generating Scene 5: CTA...")
    
    bg = ColorClip(size=(VIDEO_WIDTH, VIDEO_HEIGHT), color=(8, 12, 35), duration=duration)
    
    # Button
    button_text = TextClip(
        text="APPLY NOW",
        font_size=90,
        color="#000000",
        font="Arial-Bold"
    )
    button_bg = ColorClip(size=(button_text.w + 100, button_text.h + 40), color=(255, 215, 0), duration=duration)
    button = CompositeVideoClip([button_bg, button_text.with_position("center")])
    button = button.with_duration(duration).with_position(("center", 400))
    
    deadline = create_text_overlay(
        "Application Deadline: January 25, 2026\nCohort Starts: February 10, 2026",
        duration,
        font_size=50,
        color="#00f0ff",
        position=("center", 600)
    )
    
    slots = create_text_overlay(
        "⚠️  ONLY 20 SLOTS AVAILABLE  ⚠️",
        duration,
        font_size=55,
        color="#ff4444",
        position=("center", 150)
    )
    
    scene = CompositeVideoClip([bg, slots, button, deadline])
    print("✅ Scene 5 complete")
    return scene

def main():
    start_time = time.time()
    
    # Generate scenes
    print("\n🎨 STEP 1: Generating Scenes")
    print("-" * 70)
    
    scene1 = generate_scene_1(8)
    scene2 = generate_scene_2(7)
    scene3 = generate_scene_3(15)
    scene4 = generate_scene_4(15)
    scene5 = generate_scene_5(15)
    
    # Combine with transitions
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
    
    # Add audio
    print("\n🎵 STEP 3: Adding Audio")
    print("-" * 70)
    if AUDIO_PATH.exists():
        print("Adding background music...")
        audio = AudioFileClip(str(AUDIO_PATH)).with_volume_scaled(0.3)
        audio = audio.with_duration(final_video.duration)
        final_video = final_video.with_audio(audio)
        print("✅ Audio added")
    else:
        print("⚠️  Audio file not found, skipping")
    
    # Render
    print("\n🎥 STEP 4: Rendering Final Video")
    print("-" * 70)
    print(f"Output: {OUTPUT_VIDEO}")
    print("This will take 3-5 minutes. Sit back! ☕\n")
    
    final_video.write_videofile(
        str(OUTPUT_VIDEO),
        fps=FPS,
        codec='libx264',
        audio_codec='aac',
        temp_audiofile='temp-audio.m4a',
        remove_temp=True,
        preset='medium',
        threads=4
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
    print("3. Page auto-updates!")

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\n\n⚠️  Cancelled")
        sys.exit(1)
    except Exception as e:
        print(f"\n\n❌ Error: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)
