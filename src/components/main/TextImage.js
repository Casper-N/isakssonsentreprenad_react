export const TextImage = ({ text }) => {
  return (
    <div className="mb-3 img-container">
      <div id="home" className="target-anchor"></div>
      <img src="images/home.jpg" alt="" style={{ width: "100%" }} />
      <div
        className="img-text fw-bold text-light p-2 m-md-5"
        style={{ textShadow: "2px 2px #3c3c3c" }}
      >
        {text}
      </div>
    </div>
  );
};
