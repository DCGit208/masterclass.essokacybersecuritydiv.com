import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig, Audio, Img, staticFile } from 'remotion';

interface CEHEliteVideoProps {
  instructorName: string;
  awardTitle: string;
  deadline: string;
  cohortStart: string;
  maxSlots: number;
}

export const CEHEliteVideo: React.FC<CEHEliteVideoProps> = ({
  instructorName,
  awardTitle,
  deadline,
  cohortStart,
  maxSlots,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Scene timing (in frames at 30fps)
  const scene1End = 8 * fps; // 0-8s: The Problem
  const scene2End = 15 * fps; // 8-15s: The Gap
  const scene3End = 30 * fps; // 15-30s: Elite Difference
  const scene4End = 45 * fps; // 30-45s: Transformation
  const scene5End = 60 * fps; // 45-60s: CTA

  // Brand colors
  const colors = {
    dark: '#0a0e27',
    accent: '#00f0ff',
    gold: '#ffd700',
    red: '#ff4444',
  };

  return (
    <AbsoluteFill style={{ backgroundColor: colors.dark }}>      {/* Background Music - loops throughout entire video */}
      <Audio
        src={staticFile('audio/epic-background.mp3')}
        volume={0.3}
        loop
        startFrom={0}
      />
      {/* Cyber grid background */}
      <AbsoluteFill
        style={{
          background: `
            linear-gradient(${colors.accent}22 1px, transparent 1px),
            linear-gradient(90deg, ${colors.accent}22 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          opacity: 0.1,
        }}
      />

      {/* Scene 1: The Problem (0-8s) */}
      {frame < scene1End && <Scene1 frame={frame} fps={fps} colors={colors} />}

      {/* Scene 2: The Gap (8-15s) */}
      {frame >= scene1End && frame < scene2End && (
        <Scene2 frame={frame - scene1End} fps={fps} colors={colors} />
      )}

      {/* Scene 3: Elite Difference (15-30s) */}
      {frame >= scene2End && frame < scene3End && (
        <Scene3
          frame={frame - scene2End}
          fps={fps}
          colors={colors}
          instructorName={instructorName}
          awardTitle={awardTitle}
        />
      )}

      {/* Scene 4: Transformation (30-45s) */}
      {frame >= scene3End && frame < scene4End && (
        <Scene4 frame={frame - scene3End} fps={fps} colors={colors} />
      )}

      {/* Scene 5: CTA (45-60s) */}
      {frame >= scene4End && frame < scene5End && (
        <Scene5
          frame={frame - scene4End}
          fps={fps}
          colors={colors}
          deadline={deadline}
          cohortStart={cohortStart}
          maxSlots={maxSlots}
        />
      )}
    </AbsoluteFill>
  );
};

// Scene 1: The Problem
const Scene1: React.FC<{ frame: number; fps: number; colors: any }> = ({ frame, fps, colors }) => {
  const glitchOpacity = interpolate(frame, [0, fps * 2, fps * 4, fps * 6], [0, 1, 0.5, 1], {
    extrapolateRight: 'clamp',
  });

  const textOpacity = interpolate(frame, [fps * 3, fps * 5], [0, 1], { extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 60,
      }}
    >
      {/* ACCESS DENIED glitch effect */}
      <div
        style={{
          fontSize: 120,
          fontWeight: 'bold',
          color: colors.red,
          opacity: glitchOpacity,
          textShadow: `0 0 20px ${colors.red}`,
          fontFamily: 'monospace',
        }}
      >
        ACCESS DENIED
      </div>

      {/* Main text */}
      <div
        style={{
          fontSize: 64,
          color: 'white',
          textAlign: 'center',
          maxWidth: 1400,
          lineHeight: 1.4,
          opacity: textOpacity,
          fontWeight: 600,
        }}
      >
        You passed CEH.
        <br />
        <span style={{ color: colors.accent }}>But when it&apos;s time to deliver—you freeze.</span>
      </div>

      {/* Overlay text */}
      <div
        style={{
          fontSize: 40,
          color: colors.gold,
          opacity: textOpacity,
          fontStyle: 'italic',
        }}
      >
        Theory ≠ Real-World Execution
      </div>
    </AbsoluteFill>
  );
};

// Scene 2: The Gap
const Scene2: React.FC<{ frame: number; fps: number; colors: any }> = ({ frame, fps, colors }) => {
  const slideIn = spring({
    frame,
    fps,
    config: { damping: 100 },
  });

  const leftX = interpolate(slideIn, [0, 1], [-1000, 100]);
  const rightX = interpolate(slideIn, [0, 1], [2000, 1020]);

  return (
    <AbsoluteFill style={{ flexDirection: 'row', padding: 100, gap: 40 }}>
      {/* Left: Regular CEH */}
      <div
        style={{
          flex: 1,
          border: `3px solid ${colors.red}`,
          borderRadius: 20,
          padding: 40,
          transform: `translateX(${leftX}px)`,
          backgroundColor: 'rgba(255, 68, 68, 0.1)',
        }}
      >
        <div style={{ fontSize: 48, color: colors.red, marginBottom: 30, fontWeight: 'bold' }}>
          Regular CEH Course
        </div>
        <div style={{ fontSize: 32, color: 'white', lineHeight: 1.6 }}>
          ❌ Generic slides
          <br />
          ❌ Theory-focused
          <br />
          ❌ Pass the exam
          <br />
          ❌ Limited labs
        </div>
      </div>

      {/* Right: CEH Elite V13 */}
      <div
        style={{
          flex: 1,
          border: `3px solid ${colors.accent}`,
          borderRadius: 20,
          padding: 40,
          transform: `translateX(${rightX}px)`,
          backgroundColor: `rgba(0, 240, 255, 0.1)`,
        }}
      >
        <div
          style={{
            fontSize: 48,
            color: colors.accent,
            marginBottom: 30,
            fontWeight: 'bold',
          }}
        >
          CEH Elite V13
        </div>
        <div style={{ fontSize: 32, color: 'white', lineHeight: 1.6 }}>
          ✅ Live red team scenarios
          <br />
          ✅ Real-world execution
          <br />
          ✅ Performance-focused
          <br />
          ✅ <span style={{ color: colors.gold }}>43 new V13 vectors</span>
        </div>
      </div>

      {/* Bottom text */}
      <AbsoluteFill style={{ justifyContent: 'flex-end', alignItems: 'center', paddingBottom: 80 }}>
        <div style={{ fontSize: 44, color: colors.gold, fontWeight: 'bold' }}>
          We teach you TO PERFORM
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// Scene 3: Elite Difference
const Scene3: React.FC<{
  frame: number;
  fps: number;
  colors: any;
  instructorName: string;
  awardTitle: string;
}> = ({ frame, fps, colors, instructorName, awardTitle }) => {
  const fadeIn = interpolate(frame, [0, fps], [0, 1], { extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill style={{ padding: 100, justifyContent: 'center', gap: 50 }}>
      {/* Header */}
      <div
        style={{
          fontSize: 72,
          color: colors.accent,
          textAlign: 'center',
          fontWeight: 'bold',
          opacity: fadeIn,
        }}
      >
        This isn&apos;t a course. It&apos;s an <span style={{ color: colors.gold }}>immersion.</span>
      </div>

      {/* Stats Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 30,
          marginTop: 40,
        }}
      >
        {[
          { value: '12 Weeks', label: 'Live Immersion' },
          { value: 'Real Infrastructure', label: 'Attack Labs' },
          { value: awardTitle.split(' ')[0], label: awardTitle.substring(awardTitle.indexOf(' ') + 1) },
          { value: '20 Slots', label: 'Application Only' },
        ].map((stat, i) => {
          const statFade = interpolate(frame, [fps * (i + 1), fps * (i + 1.5)], [0, 1], {
            extrapolateRight: 'clamp',
          });

          return (
            <div
              key={i}
              style={{
                backgroundColor: 'rgba(0, 240, 255, 0.1)',
                border: `2px solid ${colors.accent}`,
                borderRadius: 15,
                padding: 30,
                textAlign: 'center',
                opacity: statFade,
              }}
            >
              <div style={{ fontSize: 48, color: colors.gold, fontWeight: 'bold', marginBottom: 10 }}>
                {stat.value}
              </div>
              <div style={{ fontSize: 24, color: 'white' }}>{stat.label}</div>
            </div>
          );
        })}
      </div>

      {/* Instructor callout */}
      <div
        style={{
          marginTop: 40,
          textAlign: 'center',
          fontSize: 36,
          color: 'white',
          opacity: interpolate(frame, [fps * 8, fps * 10], [0, 1], { extrapolateRight: 'clamp' }),
        }}
      >
        Led by <span style={{ color: colors.accent, fontWeight: 'bold' }}>{instructorName}</span>
        <br />
        <span style={{ fontSize: 28, color: colors.gold }}>{awardTitle}</span>
      </div>

      {/* Global Instructor Award Certificate */}
      <AbsoluteFill style={{ justifyContent: 'flex-end', alignItems: 'center', paddingBottom: 40 }}>
        <div
          style={{
            opacity: interpolate(frame, [fps * 10, fps * 12], [0, 1], { extrapolateRight: 'clamp' }),
            width: 300,
            height: 400,
            position: 'relative',
          }}
        >
          <Img
            src={staticFile('Global Instructor award.png')}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              filter: 'drop-shadow(0 0 20px rgba(255, 215, 0, 0.5))',
            }}
          />
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// Scene 4: Transformation
const Scene4: React.FC<{ frame: number; fps: number; colors: any }> = ({ frame, fps, colors }) => {
  const slideUp = interpolate(frame, [0, fps * 2], [-200, 0], { extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill style={{ padding: 100, justifyContent: 'center', alignItems: 'center', gap: 60 }}>
      {/* Header */}
      <div
        style={{
          fontSize: 64,
          color: 'white',
          textAlign: 'center',
          transform: `translateY(${slideUp}px)`,
        }}
      >
        Within <span style={{ color: colors.gold }}>90 days</span>, students go from
        <br />
        <span style={{ color: colors.accent, fontWeight: 'bold' }}>&apos;certified&apos; to CONFIDENT</span>
      </div>

      {/* Before/After salary */}
      <div style={{ display: 'flex', gap: 100, marginTop: 40 }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 32, color: colors.red, marginBottom: 20 }}>BEFORE</div>
          <div
            style={{
              fontSize: 56,
              color: 'white',
              fontWeight: 'bold',
              border: `3px solid ${colors.red}`,
              padding: 30,
              borderRadius: 15,
            }}
          >
            $65K
          </div>
          <div style={{ fontSize: 28, color: 'gray', marginTop: 15 }}>SOC Analyst</div>
        </div>

        <div style={{ fontSize: 80, color: colors.accent, alignSelf: 'center' }}>→</div>

        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 32, color: colors.gold, marginBottom: 20 }}>AFTER</div>
          <div
            style={{
              fontSize: 56,
              color: colors.gold,
              fontWeight: 'bold',
              border: `3px solid ${colors.gold}`,
              padding: 30,
              borderRadius: 15,
            }}
          >
            $110K
          </div>
          <div style={{ fontSize: 28, color: 'white', marginTop: 15 }}>Penetration Testing Lead</div>
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: 'flex', gap: 60, marginTop: 50 }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 64, color: colors.accent, fontWeight: 'bold' }}>95%</div>
          <div style={{ fontSize: 28, color: 'white' }}>Pass Rate</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 64, color: colors.gold, fontWeight: 'bold' }}>$40K</div>
          <div style={{ fontSize: 28, color: 'white' }}>Avg. Salary Increase</div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// Scene 5: CTA
const Scene5: React.FC<{
  frame: number;
  fps: number;
  colors: any;
  deadline: string;
  cohortStart: string;
  maxSlots: number;
}> = ({ frame, fps, colors, deadline, cohortStart, maxSlots }) => {
  const pulseScale = interpolate(
    frame % (fps * 2),
    [0, fps, fps * 2],
    [1, 1.05, 1],
    { extrapolateRight: 'clamp' }
  );

  return (
    <AbsoluteFill style={{ padding: 100, justifyContent: 'center', alignItems: 'center', gap: 50 }}>
      {/* Urgency header */}
      <div
        style={{
          fontSize: 72,
          color: colors.gold,
          fontWeight: 'bold',
          textAlign: 'center',
          textShadow: `0 0 30px ${colors.gold}`,
        }}
      >
        ONLY {maxSlots} SLOTS AVAILABLE
      </div>

      {/* Key dates */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 40,
          marginTop: 40,
          width: '100%',
          maxWidth: 1200,
        }}
      >
        <div
          style={{
            backgroundColor: `rgba(255, 68, 68, 0.2)`,
            border: `3px solid ${colors.red}`,
            borderRadius: 20,
            padding: 40,
            textAlign: 'center',
          }}
        >
          <div style={{ fontSize: 32, color: colors.red, marginBottom: 15 }}>Application Deadline</div>
          <div style={{ fontSize: 56, color: 'white', fontWeight: 'bold' }}>{deadline}</div>
        </div>

        <div
          style={{
            backgroundColor: `rgba(0, 240, 255, 0.2)`,
            border: `3px solid ${colors.accent}`,
            borderRadius: 20,
            padding: 40,
            textAlign: 'center',
          }}
        >
          <div style={{ fontSize: 32, color: colors.accent, marginBottom: 15 }}>Cohort Starts</div>
          <div style={{ fontSize: 56, color: 'white', fontWeight: 'bold' }}>{cohortStart}</div>
        </div>
      </div>

      {/* CTA Button */}
      <div
        style={{
          marginTop: 60,
          backgroundColor: colors.accent,
          padding: '40px 80px',
          borderRadius: 20,
          fontSize: 56,
          color: colors.dark,
          fontWeight: 'bold',
          transform: `scale(${pulseScale})`,
          boxShadow: `0 0 50px ${colors.accent}`,
        }}
      >
        APPLY NOW →
      </div>

      {/* Bottom text */}
      <div style={{ fontSize: 36, color: 'white', textAlign: 'center', marginTop: 40 }}>
        Application + Interview Required
      </div>
    </AbsoluteFill>
  );
};
