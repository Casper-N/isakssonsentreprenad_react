export const MachineDesc = ({ name, info }) => {
  return (
    <div className="mb-4">
      <div className="fw-bold">{name}</div>
      {info.map((i, idx) => (
        <div key={idx}>{i}</div>
      ))}
    </div>
  );
};
