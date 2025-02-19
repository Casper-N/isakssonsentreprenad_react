export const ServiceCard = ({ img, title, description }) => {
  return (
    <div className="col-md-3 col-6 mb-3">
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
