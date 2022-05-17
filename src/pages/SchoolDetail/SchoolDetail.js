import { Card, Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import classes from "./SchoolDetail.module.css";

const SchoolDetail = () => {
  const location = useLocation();

  const school = location.state.school;

  return (
    <Container className="my-5">
      <Card className="p-4 mb-3">
        <div className="d-flex align-items-center">
          <div className="col-2 d-flex justify-content-center">
            <img
              className={`${classes.logo}`}
              src={school.logo}
              alt={school.name}
            />
          </div>
          <div className="col-10 d-flex justify-content-between">
            <div>
              <p className="fw-bold fs-5 p-0 m-0">{school.name}</p>
              <p className="fw-bold p-0 m-0" style={{ fontSize: "10px" }}>
                {`${school.city}, ${school.state}`}
                <a className="mx-3" href={school.logo} target="_blank">
                  {school.url}
                </a>
              </p>
            </div>

            {/* {pinned ? <AiFillPushpin /> : <AiOutlinePushpin />} */}
          </div>
        </div>

        <p className="col-10 offset-2">{school.about}</p>
      </Card>
    </Container>
  );
};

export default SchoolDetail;
