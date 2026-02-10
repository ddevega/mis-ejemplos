import { useState, useRef, useEffect } from "react";

type Props = {
  src: string;
};

const VideoPlayer = ({ src }: Props) => {
  const [isStopped, setIsStopped] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const handlerClick = () => {
    setIsStopped(!isStopped);
  };

  useEffect(() => {
    if (!isStopped) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  }, [isStopped]);

  return (
    <div>
      <button onClick={handlerClick}>{isStopped ? "Iniciar" : "Pausar"}</button>
      <video ref={videoRef} src={src} loop playsInline></video>
    </div>
  );
};

export default VideoPlayer;
