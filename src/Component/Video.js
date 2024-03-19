import "./Video.css";

function Video({ title, channel, views, time }) {
  //let topic = "React-JS Tutorial";
  //let bg = "dark";
  return (
    <>
      <div className="container">
        <div className="pic">
          <img src="https://placebeard.it/160x90" alt="" />
        </div>
        <div className="title">{title}</div>
        <div className="channel">{channel}</div>
        <div className="views">
          {views} views <span>.</span> {time}
        </div>
      </div>
    </>
  );
}

export default Video;
