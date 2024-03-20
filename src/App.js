import "./App.css";
import Video from "./Component/Video";
import Videos  from "./Data/Data";
function App() {
  // console.log(Videos);

  return (
    <div className="App">
      <div>Videos</div>
      {Videos.map((video) => (
        <Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          id={video.id}
        ></Video>
      ))}
    </div>
  );
}

export default App;
