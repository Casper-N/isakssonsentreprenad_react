import { ContactForm } from "./comps/ContactForm";
import { ContactInfo } from "./comps/ContactInfo";
import { Title } from "./comps/Title";

export const Contact = () => {
  return (
    <div>
      <div id="contact" className="target-anchor"></div>
      <div className="row pb-5">
        <Title text={"Kontakt"} />

        <div className="col">
          <div className="row me-5 ms-5 border rounded">
            <div className="col-12 col-md-6 p-md-5">
              <ContactForm />
            </div>

            <div className="col-12 col-md-6 p-5">
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
