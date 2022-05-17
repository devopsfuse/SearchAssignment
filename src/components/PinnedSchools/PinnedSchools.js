import PinnedSchool from "./PinnedSchool";
import classes from "./PinnedSchools.module.css";

const PinnedSchools = ({ pinnedSchools }) => {
  return (
    <div>
      {/* <p className={classes.heading}>Your Pinned Colleges</p> */}

      <div className={`d-flex ${classes.main}`}>
        {pinnedSchools.map((school) => (
          <PinnedSchool school={school} />
        ))}
      </div>
    </div>
  );
};

export default PinnedSchools;
