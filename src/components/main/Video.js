const Video = () => {
  return (
    <div>
      <div id="home"></div>
      <div className="row mb-3">
        <video src={process.env.PUBLIC_URL + "/media/treefelling.mp4"} autoPlay loop muted></video>
      </div>
    </div>
  );
}

export default Video;
