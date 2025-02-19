import { MachineDesc } from "./comps/MachineDesc";
import { Title } from "./comps/Title";

export const MachineFleet = () => {
  return (
    <div>
      <div id="machinefleet" className="target-anchor"></div>
      <div className="row mb-5">
        <Title text={"Maskinpark"} />
        <div className="col">
          <div className="row">
            <MachineDesc
              name={"Maskinnamn"}
              info={["Maskininfo, tex:", "Kapacitet: 600l"]}
            />
            <MachineDesc
              name={"Maskinnamn"}
              info={["Maskininfo, tex:", "Kapacitet: 600l"]}
            />
            <MachineDesc
              name={"Maskinnamn"}
              info={["Maskininfo, tex:", "Kapacitet: 600l"]}
            />
            <MachineDesc
              name={"Maskinnamn"}
              info={["Maskininfo, tex:", "Kapacitet: 600l"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
