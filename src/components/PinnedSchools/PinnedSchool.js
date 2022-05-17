import { Card } from "react-bootstrap";

const PinnedSchool = ({ school }) => {
  return (
    <Card
      className="d-flex justify-content-center align-items-center p-3 mx-2"
      style={{ boxSizing: "border-box", width: "22%" }}
    >
      <img
        src={school.logo}
        alt="College"
        width={80}
        height={80}
        style={{ borderRadius: "50%", marginBottom: "8px" }}
      />

      <p className="m-0">{school.name}</p>
      <p className="m-0" style={{ fontSize: "12px", fontFamily: "Rubik" }}>
        {`${school.city}, ${school.state}`}
      </p>
    </Card>
  );
};

export default PinnedSchool;
