import { Fragment, useState } from "react";
import { Button, Card, Toast, ToastContainer } from "react-bootstrap";
import { AiOutlinePushpin, AiFillPushpin } from "react-icons/ai";
import { BiUserPlus } from "react-icons/bi";
import { useHistory } from "react-router-dom";
import classes from "./School.module.css";

const School = (props) => {
  const school = props.school;

  const history = useHistory();

  const [pinned, setPinned] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const pinSchoolHandler = () => {
    if (props.pinnedListSize < 8) {
      setPinned((prevState) => !prevState);
      props.onPin(school);
    } else {
      setShowToast(true);
    }
  };

  const unpinSchoolHandler = () => {
    props.onUnpin(school.id);
    setPinned((prevState) => !prevState);
  };

  const readMoreClickHandler = () => {
    history.push("school-detail", { school: school });
  };

  return (
    <Fragment>
      <Card className="p-2 mb-3">
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

            <div className="d-flex">
              <Button size="sm" variant="secondary" type="button">
                {pinned ? (
                  <AiFillPushpin onClick={unpinSchoolHandler} />
                ) : (
                  <AiOutlinePushpin onClick={pinSchoolHandler} />
                )}
              </Button>

              <Button
                className="mx-1"
                size="sm"
                variant="secondary"
                type="button"
              >
                <BiUserPlus /> Follow
              </Button>
            </div>
          </div>
        </div>

        <p className="col-10 offset-2">{school.about.slice(0, 100)}...</p>
        <span
          className={`offset-2 mb-3 ${classes.readMore}`}
          onClick={readMoreClickHandler}
        >
          Read More...
        </span>

        <div className="d-flex offset-2 mb-3">
          <CourseButton>4-Year</CourseButton>
          <CourseButton>2-Year</CourseButton>
          <CourseButton>B.Tech</CourseButton>
          <CourseButton>Diploma</CourseButton>
          <CourseButton>BCA</CourseButton>
          <CourseButton>4-Year</CourseButton>
          <CourseButton>2-Year</CourseButton>
          <CourseButton>B.Tech</CourseButton>
          <CourseButton>Diploma</CourseButton>
          <CourseButton>BCA</CourseButton>
        </div>

        <img className="col-10 offset-2" height="200" src={school.logo} />
      </Card>

      <ToastContainer position="bottom-end">
        <Toast
          bg="secondary"
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={4000}
          autohide
        >
          <Toast.Body>
            <b>You can not pin more than 8 colleges!</b>
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </Fragment>
  );
};

const CourseButton = (props) => {
  return (
    <Button variant="outline-secondary" style={{ borderRadius: "0" }}>
      {props.children}
    </Button>
  );
};

export default School;
