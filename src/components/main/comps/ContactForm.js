import { useState } from "react";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (name.length <= 0 || message.length <= 0 || email.length <= 0) return;

    const formData = {
      name,
      email,
      phone,
      message,
    };

    try {
      const response = await fetch("/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Meddelande skickat!");
        setName("");
        setEmail("");
        setPhone();
        setMessage("");
      } else {
        setStatus("Meddelandet kunde inte skickas!");
      }
    } catch (error) {
      setStatus("Meddelandet kunde inta skicka pga ett fel");
      console.error(error);
    }
  };

  return (
    <form className="ms-md-5 p-3 p-md-0" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-12 mb-3">
          <label htmlFor="contactForm_name" className="form-label form-req">
            Namn
            <span>*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="contactForm_name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          ></input>
        </div>

        <div className="col-12 col-md-6 mb-3">
          <label htmlFor="contactForm_email" className="form-label form-req">
            Email
            <span>*</span>
          </label>
          <InputGroup
            icon="envelope"
            type="email"
            id="email"
            required={true}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="col-12 col-md-6 mb-3">
          <label htmlFor="contactForm_phone" className="form-label">
            Telefonnummer
          </label>
          <InputGroup
            icon="phone"
            type="tel"
            id="phone"
            required={false}
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
        </div>

        <div className="col-12 mb-3">
          <label htmlFor="contactForm_message" className="form-label form-req">
            Meddelande
            <span>*</span>
          </label>
          <textarea
            className="form-control"
            id="contactForm_message"
            rows={5}
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            required
          />
        </div>

        <div className="col-12 mb-3">
          <button className="btn btn-primary w-100 fs-5" type="submit">
            Ta kontakt
          </button>
        </div>

        <div className="col-12 mb-3">{status}</div>
      </div>
    </form>
  );
};

const InputGroup = ({ icon, type, required, id, onChange, value }) => {
  return (
    <div className="input-group">
      <span className="input-group-text">
        <span className={`fa fa-${icon}`}></span>
      </span>
      <input
        type={type}
        className="form-control"
        id={`contactForm_${id}`}
        onChange={onChange}
        value={value}
        required={required}
      ></input>
    </div>
  );
};
