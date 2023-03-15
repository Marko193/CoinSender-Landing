import React, { useState } from "react";
import "./VideoPlayer.module.css";

function VideoPlayer({ src }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const videoRef = React.createRef();

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  const toggleFullScreen = () => {
    if (!isFullScreen) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) {
        videoRef.current.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div className="video-player">
      <video
        ref={videoRef}
        src={src}
        onClick={togglePlay}
        className={isPlaying ? "playing" : ""}
      />
      <div className="controls">
        <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button>
        <button onClick={toggleFullScreen}>
          {isFullScreen ? "Exit Fullscreen" : "Fullscreen"}
        </button>
      </div>
    </div>
  );
}

export default VideoPlayer;
