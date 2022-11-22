import react from "react";


const Avis = () => {
  return (
    <div style={{ marginBottom: "15px" }}>
      Trier par :
      <button
        type="button"
        className="btn btn-outline-success"
        style={{ margin: "1px" }}
      >
        Prix
      </button>
      <button
        type="button"
        className="btn btn-outline-success"
        style={{ margin: "1px" }}
      >
        Ordre Alpha
      </button>
      <button
        type="button"
        className="btn btn-outline-success"
        style={{ margin: "1px" }}
      >
        Avis
      </button>
    </div>
  );
};

export default Avis;
