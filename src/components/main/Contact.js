import { ContactForm } from "./comps/ContactForm";
import { ContactInfo } from "./comps/ContactInfo";
import { Title } from "./comps/Title";

export const Contact = () => {
  return (
    <div>
      <div id="contact" className="target-anchor"></div>
      <div className="row pb-5" style={{ marginBottom: "212px" }}>
        <Title text={"Kontakt"} />

        <div className="col">
          <div className="row me-5 ms-5 border rounded">
            <div className="col ms-5 p-5 d-flex justify-content-center">
              <ContactForm />
            </div>

            <div className="col me-5 p-5 d-flex justify-content-center">
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
