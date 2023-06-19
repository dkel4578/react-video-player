import React from "react";

const BtnGroup = ({ playVid, pauseVid, stopVid }) => {
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
