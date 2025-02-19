import { MachineDesc } from "./comps/MachineDesc";
import { Title } from "./comps/Title";

export const MachineFleet = () => {
  return (
    <div>
      <div id="machinefleet" className="target-anchor"></div>
      <div className="row mb-5">
        <Title text={"Maskinpark"} />
        <div className="d-flex flex-row justify-content-center gap-5">
          <div className="mb-3 me-5">
            <MachineDesc
              name={"Maskinnamn"}
              info={["Maskininfo, tex:", "Kapacitet: 600l"]}
            />
            <MachineDesc
              name={"Maskinnamn"}
              info={["Maskininfo, tex:", "Kapacitet: 600l"]}
            />
          </div>
          <div className="mb-3 ms-5">
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
