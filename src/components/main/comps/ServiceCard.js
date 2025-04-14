export const ServiceCard = ({ img, title, description }) => {
  return (
    <div className="col-12 col-sm-6 col-md-3 mb-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title fw-bold">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
        <img
          src={img}
          className="card-img-bottom img-fluid"
          alt="Tjänst"
          style={{ height: "500px", objectFit: 'fill' }}
        />
      </div>
    </div>
  );
};
