import { Composition } from 'remotion';
import { CEHEliteVideo } from './video/CEHEliteVideo';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="CEHEliteV13"
        component={CEHEliteVideo}
        durationInFrames={1800} // 60 seconds at 30fps
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          instructorName: "Dr. Coach Achu Gustave",
          awardTitle: "EC-Council Global Instructor of the Year 2022",
          deadline: "January 25, 2026",
          cohortStart: "February 10, 2026",
          maxSlots: 20,
        }}
      />
    </>
  );
};
