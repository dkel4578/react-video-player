import React from "react";

const BtnGroup = (props) => {
  const videoRef=props.videoRef
  let setCurrentTime=props.setCurrentTime
  
  const playVid = () => {
    videoRef.current.play();
  };
  //pause
  const pauseVid = () => {
    videoRef.current.pause();
  };
  //중단하고 처음으로 돌아가기
  const stopVid = () => {
    videoRef.current.pause();
    setCurrentTime(0);
    videoRef.current.load();
  };
  return (
    <div className="btnGroup">
      <button className="play" onClick={playVid}>
        PLAY
      </button>
      <button className="pause" onClick={pauseVid}>
        PAUSE
      </button>
      <button className="stop" onClick={stopVid}>
        STOP
      </button>
    </div>
  );
};

export default BtnGroup;
