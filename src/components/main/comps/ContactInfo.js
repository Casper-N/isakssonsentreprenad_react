import { media } from "../../../utils.js";

export const ContactInfo = () => {
  return (
    <div className="me-md-5">
      <div className="row">
        <div className="col-6 mb-3">
          <img
            src={media("/profile.jpeg")}
            alt="Kevin Isaksson"
            className="img-fluid rounded-circle"
          />
        </div>
        <div className="col-12 col-md-6 mb-5 mb-md-3 align-self-center">
          <div className="fs-3">Kevin Isaksson</div>
          <div className="fs-5 text-muted mb-5">VD (Firmans man)</div>
          <div className="d-flex flex-row gap-3">
            <a
              className="fs-2"
              href="https://www.facebook.com/IsakssonsEntreprenad"
            >
              <span className="fa fa-facebook"></span>
            </a>

            <a
              className="fs-2"
              href="https://www.instagram.com/IsakssonsEntreprenad"
            >
              <span className="fa fa-instagram"></span>
            </a>
          </div>
        </div>
        <div className="col-12 col-md-6 mb-3 mb-md-5">
          <Badge
            icon="phone"
            title="Telefon"
            text={<a className="text-dark" href="tel:+358404151950">+358 40 4151950</a>}
          />
        </div>
        <div className="col-12 col-md-6 mb-5">
          <Badge
            icon="envelope"
            title="Email"
            text={<a className="text-dark" href="mailto:isakssons.entreprenad@outlook.com">isakssons.entreprenad@outlook.com</a>}
          />
        </div>
      </div>
    </div>
  );
};

const Badge = ({ icon, title, text }) => {
  return (
    <div>
      <span className={`fs-2 text-primary mb-2 fa fa-${icon}`}></span>
      <div className="fs-5 fw-bold">{title}</div>
      <hr />
      {text}
    </div>
  );
};
