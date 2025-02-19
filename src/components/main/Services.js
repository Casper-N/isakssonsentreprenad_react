import { ServiceCard } from "./comps/ServiceCard";
import { Title } from "./comps/Title";

export const Services = () => {
  return (
    <div>
      <div id="services" className="target-anchor"></div>
      <div className="row mb-5">
        <Title text={"Tjänster"} />
        <ServiceCard
          img={"woodsplitting.jpg"}
          title={"Vädklyvning"}
          description={"Kort beskrivning om tjänsten"}
        />
        <ServiceCard
          img={"forestry.png"}
          title={"Risröjning"}
          description={"Kort beskrivning om tjänsten"}
        />
        <ServiceCard
          img={"tree_felling.jpg"}
          title={"Trädfällning"}
          description={"Kort beskrivning om tjänsten"}
        />
        <ServiceCard
          img={"ditch_cleaning.jpg"}
          title={"Dikesröjning"}
          description={"Kort beskrivning om tjänsten"}
        />
      </div>
    </div>
  );
};
