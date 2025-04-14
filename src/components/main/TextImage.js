import { media } from "../../utils";

export const TextImage = ({ text }) => {
  return (
    <div className="mb-3 img-container">
      <div id="home" className="target-anchor"></div>
      <img src={media("/wood_mountain.jpg")} alt="" className="img-fluid" />
      <div
        className="img-text fw-bold text-light"
        style={{ textShadow: "2px 2px #3c3c3c" }}
      >
        {text}
      </div>
    </div>
  );
};
