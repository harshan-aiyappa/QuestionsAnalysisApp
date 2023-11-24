// AudioControl.js
import React, { useState, useRef } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import StopIcon from '@mui/icons-material/Stop';
import GraphicEqOutlinedIcon from '@mui/icons-material/GraphicEqOutlined';

const AudioControl = ({ audioFile }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleStop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  return (
    <div className='audio-controls'>
      <audio ref={audioRef} src={audioFile} />
      <button className='css-button-shadow-border--black' onClick={handlePlay} disabled={isPlaying}>
        <GraphicEqOutlinedIcon />
            Start Recording</button>
      {/* <button className='css-button-shadow-border--black' onClick={handlePause} disabled={!isPlaying}>
        <PauseIcon />
        Pause
      </button> */}
      <button className='css-button-shadow-border--black' onClick={handleStop} disabled={!isPlaying}>
        <StopIcon />
        Stop Recording
      </button>
    </div>
  );
};

export default AudioControl;
