export const ServiceCard = ({ img, title, description }) => {
  return (
    <div className="col-12 col-sm-6 col-md-3 mb-3">
      <div className="card">
        <img
          src={`images/services/${img}`}
          className="card-img-top"
          alt="Tjänst"
          style={{ height: "auto" }}
        />
        <div className="card-body">
          <h5 className="card-title fw-bold">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};
