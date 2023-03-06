import video from "../assets/video/video.mp4";
import './Root.css'
const Root = () => {
  return (
    <>
      <div className="root">
        <video width="1000vw" height="1000vh" autoPlay muted loop>
          <source src={video} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
};

export default Root;
