import { ContactForm } from "./comps/ContactForm";
import { ContactInfo } from "./comps/ContactInfo";
import { Title } from "./comps/Title";

export const Contact = () => {
  return (
    <div>
      <div id="contact" className="target-anchor"></div>
      <div className="row pb-5">
        <Title text={"Kontakt"} />

        <div className="container-fluid pe-5 ps-5">
          <div className="row p-3 border rounded">
            <div className="col-12 col-md-6">
              <ContactInfo />
            </div>
            <div className="col-12 col-md-6 align-self-end text-center">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
