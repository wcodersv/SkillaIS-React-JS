import React, { useState, useRef } from "react";
import style from "./AudioPlayer.module.css";
import CloseButton from "../CloseButton/index";
import Download from "../Download";

// eslint-disable-next-line react/prop-types
export const AudioPlayer = ({ src }) => {
  // не обращать внимание на код - Вика
  const [isPlaying, setIsPlaying] = useState(false);
  // const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // const handleTimeUpdate = () => {
  //   setCurrentTime(audioRef.current.currentTime);
  // };

  const handleDurationChange = () => {
    setDuration(audioRef.current.duration);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className={style.custom}>
      <audio
        ref={audioRef}
        src={src}
        // onTimeUpdate={handleTimeUpdate}
        onDurationChange={handleDurationChange}
      />

      <label className={style.display}>{formatTime(duration)}</label>
      <button onClick={togglePlay} className={style.btn}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <rect width="24" height="24" rx="12" fill="white" />
          <path
            d="M9.28742 7.06938C9.3761 7.02316 9.47535 7 9.57475 7C9.67389
           7 9.77311 7.02316 9.86218 7.06938L16.7125 11.5519C16.8901 11.6442
            17 11.8152 17 12.0001C17 12.1849 16.8904 12.3559 16.7125
             12.4481L9.86218 16.9308C9.68439 17.0231 9.46523 17.0231 9.28757
              16.9308C9.10976 16.8382 9 16.6672 9 16.4825V7.51755C9 7.33278
               9.10958 7.16182 9.28742 7.06938Z"
            fill="#002CFB"
          />
        </svg>
      </button>
      <div className={style.progress} />

      <Download />
      <CloseButton />
    </div>
  );
};
