import { ElevenLabsClient } from "elevenlabs";

/**
 * Generate voiceover for CEH Elite V13 video using ElevenLabs
 * 
 * Setup:
 * 1. Get API key from https://elevenlabs.io
 * 2. Create .env.local file: ELEVENLABS_API_KEY=your_key_here
 * 3. Run: node video/generate-voiceover.js
 */

const SCRIPT_SEGMENTS = [
  {
    scene: 1,
    text: "You passed CEH. But when it's time to deliver—you freeze.",
    outputFile: "scene1-problem.mp3"
  },
  {
    scene: 2,
    text: "Version 13 introduced 43 new attack vectors. Most courses teach you to pass. We teach you to perform.",
    outputFile: "scene2-gap.mp3"
  },
  {
    scene: 3,
    text: "This isn't a course. It's an immersion. 12 weeks. Live attacks. Real infrastructure. Government-grade training led by EC-Council's Global Instructor of the Year. You don't just learn Version 13—you master it like a red teamer.",
    outputFile: "scene3-elite.mp3"
  },
  {
    scene: 4,
    text: "Within 90 days, our students go from certified to confident. They're leading penetration tests. Commanding six-figure salaries. And speaking with authority clients actually trust.",
    outputFile: "scene4-transformation.mp3"
  },
  {
    scene: 5,
    text: "February 10th cohort. 20 slots. Application and interview required. If you're ready to go from theory to threat actor-level execution—apply now. Deadline: January 25th.",
    outputFile: "scene5-cta.mp3"
  }
];

async function generateVoiceover() {
  const apiKey = process.env.ELEVENLABS_API_KEY;
  
  if (!apiKey) {
    console.error("❌ ELEVENLABS_API_KEY not found in environment variables");
    console.log("\n📝 Setup instructions:");
    console.log("1. Get API key from https://elevenlabs.io");
    console.log("2. Create .env.local file in project root");
    console.log("3. Add: ELEVENLABS_API_KEY=your_key_here");
    process.exit(1);
  }

  const client = new ElevenLabsClient({ apiKey });

  console.log("🎙️  Generating voiceover for CEH Elite V13 video...\n");

  for (const segment of SCRIPT_SEGMENTS) {
    console.log(`Generating Scene ${segment.scene}: ${segment.outputFile}`);
    
    try {
      const audio = await client.textToSpeech.convert("21m00Tcm4TlvDq8ikWAM", {
        text: segment.text,
        model_id: "eleven_multilingual_v2",
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.75,
          style: 0.5,
          use_speaker_boost: true
        }
      });

      const fs = require('fs');
      const path = require('path');
      const outputPath = path.join(__dirname, '..', 'public', 'audio', segment.outputFile);
      
      const chunks = [];
      for await (const chunk of audio) {
        chunks.push(chunk);
      }
      
      fs.writeFileSync(outputPath, Buffer.concat(chunks));
      console.log(`✅ Saved: ${outputPath}\n`);
      
    } catch (error) {
      console.error(`❌ Error generating ${segment.outputFile}:`, error.message);
    }
  }

  console.log("🎉 Voiceover generation complete!");
  console.log("\n📁 Audio files saved to: public/audio/");
  console.log("\n🎬 Next steps:");
  console.log("1. Preview video: npm run video:preview");
  console.log("2. Listen to voiceovers in public/audio/");
  console.log("3. Adjust voice settings if needed");
  console.log("4. Render final video: npm run video:render");
}

// Run if called directly
if (require.main === module) {
  generateVoiceover().catch(console.error);
}

module.exports = { generateVoiceover, SCRIPT_SEGMENTS };
