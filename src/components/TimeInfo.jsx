import React from "react";

const TimeInfo = ({ currentTime, duration }) => {
  return (
    <div className="time-info">
      <p>
        {currentTime.toFixed(1)} s / {duration.toFixed(1)} s
      </p>
      <progress className="bar" value={duration ? (currentTime / duration) : 0} />
    </div>
  );
};

export default TimeInfo;