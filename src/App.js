import "./App.css";
import Video from "./Component/Video";

function App() {
  return (
    <div className="App">
      <div>Videos</div>
      <Video
        title="ReactJS 1"
        views="100K"
        time="1 year ago"
        channel="Adity's"
      ></Video>
      <Video
        title="ReactJS 2"
        views="500K"
        time="4 year ago"
        channel="Adity's"
      ></Video>
      <Video
        title="ReactJS 2"
        views="90K"
        time="2 year ago"
        channel="Adity's"
      ></Video>
    </div>
  );
}

export default App;
