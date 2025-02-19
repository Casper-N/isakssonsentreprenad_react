export const MachineDesc = ({ name, info }) => {
  return (
    <div className="col-12 col-sm-6 col-md-3">
      <div className="card mb-4 rounded-3 shadow-sm border-primary">
        <div className="card-header py-3 text-white bg-primary border-primary">
          <h4 className="my-0 fw-normal">{name}</h4>
        </div>
        <div className="card-body">
          <ul className="list-group ms-3 mt-3 mb-3">
            {info.map((i, idx) => (
              <li key={idx}>{i}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
