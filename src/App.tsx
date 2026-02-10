import Cronometro from "./components/Cronometro";
import VideoPlayer from "./components/VideoPlayer";

function App() {
  return (
    <>
      <Cronometro pausado={false}></Cronometro>
      <br />
      <VideoPlayer src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" />
    </>
  );
}

export default App;
