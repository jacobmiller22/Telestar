import { useRef, useState, useEffect } from "react";
import ReactPlayer from "react-player/youtube";

const Player = () => {
  const ref = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState(0);

  const TOLERANCE = 1.5; // In Seconds

  useEffect(() => {
    if (isPlaying) {
      var timerID = setInterval(() => setTime(time + 0.25), 250);
      return () => {
        clearInterval(timerID);
      };
    }
  });

  const onPause = () => {
    setIsPlaying(false);
    if (Math.abs(time - ref.current.getCurrentTime()) < TOLERANCE) {
      ref.current.showPreview();
    }
  };

  const onPlay = () => {
    setTime(ref.current.getCurrentTime());
    setIsPlaying(true);
  };

  return (
    <div>
      <ReactPlayer
        ref={ref}
        onPause={onPause}
        onPlay={onPlay}
        url="https://www.youtube.com/watch?v=c4Kv-NZrcfs"
        controls={true}
        playing={true}
        loop={true}
        light="https://semantic-ui.com/images/wireframe/image.png"
      />
    </div>
  );
};

export default Player;
