import React from 'react'  
import { useRef} from "react";

function Video(props) {
  return (
    <div>
      <video src="media/video.mp4" ref={props.videoRef}></video>

    </div>
  )
}

export default Video
