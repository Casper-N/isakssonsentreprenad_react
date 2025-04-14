import { media } from "../../utils";
import { ServiceCard } from "./comps/ServiceCard";
import { Title } from "./comps/Title";

export const Services = () => {
  return (
    <div>
      <div id="services" className="target-anchor"></div>
      <div className="row mb-5">
        <Title text={"Tjänster"} />
        <ServiceCard
          img={media("/services/wood_splitting.jpeg")}
          title={"Vedklyvning"}
          description={"Kort beskrivning om tjänsten"}
        />
        <ServiceCard
          img={media("/services/energy_cutting.jpeg")}
          title={"Energiklippning"}
          description={"Kort beskrivning om tjänsten"}
        />
        <ServiceCard
          img={media("/services/woodcutting.jpeg")}
          title={"Trädfällning"}
          description={"Kort beskrivning om tjänsten"}
        />
        <ServiceCard
          img={media("/services/transports.jpeg")}
          title={"Virkestransporter"}
          description={"Kort beskrivning om tjänsten"}
        />
      </div>
    </div>
  );
};
