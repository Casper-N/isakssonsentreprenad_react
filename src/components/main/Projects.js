import { media } from "../../utils";
import { Title } from "./comps/Title";

export const Projects = () => {
  return (
    <div>
      <div id="machinefleet" className="target-anchor"></div>
      <div className="row mb-5">
        <Title text={"Projekt"} />
        <div className="col">
          <div className="containerfluid">
            <div id="carousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="d-flex flex-row">
                    <img src={media("/image00005.jpeg")} className="d-block w-50" alt="Projekt 1" />
                    <img src={media("/image00004.jpeg")} className="d-block w-50" alt="Projekt 1" />
                  </div>
                  <div className="carousel-caption">
                    <h2 className="fw-bold">Energiklippning</h2>
                    <h4 className="fw-bold">Före/efter</h4>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="d-flex flex-row">
                    <img src={media("/image00005.jpeg")} className="d-block w-50" alt="Projekt 2" />
                    <img src={media("/image00004.jpeg")} className="d-block w-50" alt="Projekt 2" />
                  </div>
                  <div className="carousel-caption">
                    <h2 className="fw-bold">Energiklippning</h2>
                    <h4 className="fw-bold">Före/efter</h4>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="d-flex flex-row">
                    <img src={media("/image00005.jpeg")} className="d-block w-50" alt="Projekt 3" />
                    <img src={media("/image00004.jpeg")} className="d-block w-50" alt="Projekt 3" />
                  </div>
                  <div className="carousel-caption">
                    <h2 className="fw-bold">Energiklippning</h2>
                    <h4 className="fw-bold">Före/efter</h4>
                  </div>
                </div>

              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
