import { Title } from "./comps/Title";

export const About = () => {
  return (
    <div>
      <div id="about" className="target-anchor"></div>
      <div className="row mb-5">
        <Title text={"Om mig"} />

        <div className="d-flex justify-content-center mb-3">
          <p className="fs-4">
            En snäppet längre textsnutt om dig och/eller ditt företag kanske?
          </p>
        </div>

        <div className="d-flex justify-content-center gap-3">
          <div className="border p-5">
            Bild eller video på t.ex arbete eller maskin
          </div>
          <div className="border p-5">
            Bild eller video på t.ex arbete eller maskin
          </div>
        </div>
      </div>
    </div>
  );
};
