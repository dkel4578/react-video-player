import { useState, useRef, useEffect } from "react";
import Video from "./components/Video";
import TimeInfo from "./components/TimeInfo";
import BtnGroup from "./components/BtnGroup";
import "./App.css";

function App() {
  const [duration, setDuration] = useState(0); //영상길이
  const [currentTime, setCurrentTime] = useState(0); //현재 재생 시간
  const videoRef = useRef();

  //비디오 재생 hook
  useEffect(() => {
    setDuration(videoRef.current.duration);
    setCurrentTime(videoRef.current.currentTime);

    const handleLoadedMetadata = () => {
      setDuration(videoRef.current.duration);
    };
    videoRef.current.addEventListener("loadedmetadata", handleLoadedMetadata);
    //매 초마다 비디오시간 hook
    let videoInterval = setInterval(() => {
      setCurrentTime(videoRef.current.currentTime);
    }, 10);

    //clean up 인터벌 함수 제거
    return () => clearInterval(videoInterval);
  }, [currentTime]);


  // const playVid = () => {
  //   videoRef.current.play();
  // };
  // //pause
  // const pauseVid = () => {
  //   videoRef.current.pause();
  // };
  // //중단하고 처음으로 돌아가기
  // const stopVid = () => {
  //   videoRef.current.pause();
  //   setCurrentTime(0);
  //   videoRef.current.load();
  // };

  return (
    <div className="App">
      <h1>React Video Player</h1>
      <Video videoRef={videoRef}/>
      <TimeInfo currentTime={currentTime} duration={duration}/>
      <BtnGroup videoRef={videoRef}  setCurrentTime={setCurrentTime} />
    </div>
  );
}
// playVid={playVid} pauseVid={pauseVid} stopVid={stopVid}
export default App;