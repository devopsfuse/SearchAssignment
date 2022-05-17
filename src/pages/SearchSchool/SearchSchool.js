import { useEffect, useRef, useState } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import School from "../../components/SearchSchool/School";
import Search from "../../components/SearchSchool/Search";
import useHttp from "../../hooks/use-http";
import classes from "./SearchSchool.module.css";
import { FaSearch } from "react-icons/fa";
import PinnedSchools from "../../components/PinnedSchools/PinnedSchools";

const SearchSchool = () => {
  const [schools, setSchools] = useState(null);
  const [filteredSchools, setFilteredSchools] = useState(null);
  const [searchedSchools, setSearchedSchools] = useState([]);

  const [pinnedSchools, setPinnedSchools] = useState([]);

  const [states, setStates] = useState([]);

  const { sendRequest: fetchSchoolList } = useHttp();

  const searchRef = useRef();

  useEffect(() => {
    const storeSchoolList = (response) => {
      setSchools(response);
      setFilteredSchools(response);
      setSearchedSchools(response);

      const stateList = [];
      for (const item of response)
        if (!stateList.includes(item.state)) stateList.push(item.state);

      setStates(stateList);
    };

    fetchSchoolList(
      {
        endPoint: "schools",
      },
      storeSchoolList
    );
  }, [fetchSchoolList]);

  const collegeSearchHandler = () => {
    const searchText = searchRef.current.value;

    if (searchText === "") {
      setSearchedSchools(filteredSchools);
      return;
    }

    setSearchedSchools(searchColleges(filteredSchools, searchText));
  };

  const filterColleges = (state, zipcode) => {
    setFilteredSchools(
      filterByLocation(schools, state, zipcode, searchRef.current.value)
    );
    setSearchedSchools(
      filterByLocation(schools, state, zipcode, searchRef.current.value)
    );
  };

  const clearFilterHandler = () => {
    setFilteredSchools(schools);
    setSearchedSchools(schools);
    searchRef.current.value = "";
  };

  const pinSchoolHandler = (school) => {
    setPinnedSchools((prevState) => [...prevState, school]);
  };

  const removePinHandler = (schoolId) => {
    setPinnedSchools(pinnedSchools.filter((school) => school.id !== schoolId));
  };

  return (
    <div className={classes.main}>
      <div className="d-flex mb-3">
        <div
          className={`col-3 d-flex align-items-center justify-content-center ${classes.info}`}
        >
          <p>
            12
            <br />
            College Matches
          </p>
        </div>

        <div className="col-9">
          <PinnedSchools pinnedSchools={pinnedSchools} />
        </div>
      </div>

      <div className="d-flex">
        <div className={`col-3 ${classes.search}`}>
          <Search
            states={states}
            filterColleges={filterColleges}
            clearFilter={clearFilterHandler}
          />
        </div>

        <div className={`col-9 ${classes.schools}`}>
          <p className={classes.searchColleges}>Search colleges</p>

          <InputGroup className="mb-3">
            <FormControl placeholder="Enter the school name" ref={searchRef} />
            <Button
              variant="secondary"
              type="button"
              onClick={collegeSearchHandler}
            >
              <FaSearch style={{ color: "white" }} />
            </Button>
          </InputGroup>

          <div className={classes.schoolList}>
            {searchedSchools.length > 0 &&
              searchedSchools.map((school) => (
                <School
                  key={school.id}
                  school={school}
                  onPin={pinSchoolHandler}
                  onUnpin={removePinHandler}
                  pinnedListSize={pinnedSchools.length}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const searchColleges = (collegeList, searchText) => {
  const searchedColleges = [];
  for (const college of collegeList) {
    if (college.name.toLowerCase().startsWith(searchText.toLowerCase())) {
      searchedColleges.push(college);
    }
  }
  return searchedColleges;
};

const filterByLocation = (collegeList, state, zipcode, name) => {
  const filteredColleges = [];

  for (const college of collegeList) {
    if (
      (college.state === state || state === "") &&
      (college.zipcode === zipcode || zipcode === "") &&
      (college.name.toLowerCase().startsWith(name.toLowerCase()) || name === "")
    ) {
      filteredColleges.push(college);
    }
  }

  return filteredColleges;
};

export default SearchSchool;
