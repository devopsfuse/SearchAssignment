import { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import classes from "./Search.module.css";

const Search = (props) => {
  const stateRef = useRef();
  const zipRef = useRef();

  const [filterApplied, setFilterApplied] = useState(false);
  const [showLocationFilter, setShowLocationFilter] = useState(false);
  const [showCollegeSpecificFilter, setShowCollegeSpecificFilter] =
    useState(false);
  const [showCollegeProgramFilter, setShowCollegeProgramFilter] =
    useState(false);
  const [showDisabilitySupportFilter, setShowDisabilitySupportFilter] =
    useState(false);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setFilterApplied(true);
    props.filterColleges(stateRef.current.value, zipRef.current.value);
  };

  const clearFilterHandler = () => {
    setFilterApplied(false);
    document.getElementById("formSearch").reset();
    props.clearFilter();
  };

  return (
    <div className={classes.seacrh}>
      <p className={classes.seacrhHeading}>START YOUR SMART SEARCH</p>

      <Form onSubmit={formSubmitHandler} id="formSearch">
        <div className={classes.section}>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <p className={classes.sectionHeading}>LOCATION</p>

            {showLocationFilter ? (
              <AiFillMinusCircle
                onClick={() => setShowLocationFilter((prevState) => !prevState)}
              />
            ) : (
              <AiFillPlusCircle
                onClick={() => setShowLocationFilter((prevState) => !prevState)}
              />
            )}
          </div>

          {showLocationFilter && (
            <div>
              <Form.Group className="mb-3">
                <Form.Label>Search by state</Form.Label>
                <Form.Select ref={stateRef}>
                  <option>Select state</option>
                  {props.states.map((state, index) => (
                    <option key={index} value={state}>
                      {state}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>

              <hr className="mb-3" />

              <Form.Group className="mb-3">
                <Form.Label>Search by zipcode</Form.Label>
                <Form.Control
                  ref={zipRef}
                  type="number"
                  placeholder="Zipcode"
                />
              </Form.Group>

              <hr className="mb-3" />
              {/* 
              <FormControl className="mb-3">
                <FormLabel>Select Distance:</FormLabel>
                <FormGroup aria-label="SelectDistance">
                  <FormControlLabel
                    value="2 miles"
                    label="2 miles (walking distance)"
                    labelPlacement="start"
                    control={<Checkbox />}
                  />

                  <FormControlLabel
                    value="50 miles"
                    label="50 miles (moderate drive)"
                    labelPlacement="start"
                    control={<Checkbox />}
                  />

                  <FormControlLabel
                    value="500 miles"
                    label="500 miles (short flight)"
                    labelPlacement="start"
                    control={<Checkbox />}
                  />

                  <FormControlLabel
                    value="2000 miles"
                    label="2,000 miles (long flight)"
                    labelPlacement="start"
                    control={<Checkbox />}
                  />
                </FormGroup>
              </FormControl>

              <hr className="mb-3" /> */}

              {/* <FormControl className="mb-3">
                <FormLabel>Neighborhood Type</FormLabel>
                <FormGroup aria-label="NeighborhoodType">
                  <FormControlLabel
                    value="Urban"
                    label="Urban: Located in a city"
                    labelPlacement="start"
                    control={<Checkbox />}
                  />

                  <FormControlLabel
                    value="Suburban"
                    label="Suburban: In small cities, large towns or residential areas near large cities"
                    labelPlacement="start"
                    control={<Checkbox />}
                  />

                  <FormControlLabel
                    value="Rural"
                    label="Rural: Often near farms and wilderness areas and small towns"
                    labelPlacement="start"
                    control={<Checkbox />}
                  />
                </FormGroup>
              </FormControl> */}

              <Form.Group className="mb-3">
                <Form.Label>Select Distance:</Form.Label>
                <div className="offset-1">
                  <Form.Check
                    type="checkbox"
                    label="2 miles (walking distance)"
                  />
                  <Form.Check type="checkbox" label="20 miles (short drive)" />
                  <Form.Check
                    type="checkbox"
                    label="50 miles (moderate drive)"
                  />
                  <Form.Check type="checkbox" label="200 miles (long drive)" />
                  <Form.Check
                    type="checkbox"
                    label="500 miles (short flight)"
                  />
                  <Form.Check
                    type="checkbox"
                    label="2,000 miles (long flight)"
                  />
                </div>
              </Form.Group>

              <hr className="mb-3" />

              <Form.Group className="mb-3">
                <Form.Label>Neighborhood Type</Form.Label>
                <div className="offset-1">
                  <Form.Check
                    type="checkbox"
                    labelPlacement="start"
                    label="Urban: Located in a city"
                  />
                  <Form.Check
                    type="checkbox"
                    label="Suburban: In small cities, large towns or residential areas near large cities"
                  />
                  <Form.Check
                    type="checkbox"
                    label="Rural: Often near farms and wilderness areas and small towns"
                  />
                </div>
              </Form.Group>
            </div>
          )}
        </div>

        <div className={classes.section}>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <p className={classes.sectionHeading}>COLLEGE SPECIFICS</p>

            {showCollegeSpecificFilter ? (
              <AiFillMinusCircle
                onClick={() =>
                  setShowCollegeSpecificFilter((prevState) => !prevState)
                }
              />
            ) : (
              <AiFillPlusCircle
                onClick={() =>
                  setShowCollegeSpecificFilter((prevState) => !prevState)
                }
              />
            )}
          </div>

          {showCollegeSpecificFilter && <div>COLLEGE SPECIFICS</div>}
        </div>

        <div className={classes.section}>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <p className={classes.sectionHeading}>COLLEGE PROGRAMS</p>

            {showCollegeProgramFilter ? (
              <AiFillMinusCircle
                onClick={() =>
                  setShowCollegeProgramFilter((prevState) => !prevState)
                }
              />
            ) : (
              <AiFillPlusCircle
                onClick={() =>
                  setShowCollegeProgramFilter((prevState) => !prevState)
                }
              />
            )}
          </div>

          {showCollegeProgramFilter && <div>COLLEGE PROGRAMS</div>}
        </div>

        <div className={classes.section}>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <p className={classes.sectionHeading}>DISABILITY SUPPORT SERVICE</p>

            {showDisabilitySupportFilter ? (
              <AiFillMinusCircle
                onClick={() =>
                  setShowDisabilitySupportFilter((prevState) => !prevState)
                }
              />
            ) : (
              <AiFillPlusCircle
                onClick={() =>
                  setShowDisabilitySupportFilter((prevState) => !prevState)
                }
              />
            )}
          </div>

          {showDisabilitySupportFilter && <div>DISABILITY SUPPORT SERVICE</div>}
        </div>

        <div className="d-flex justify-content-between">
          <Button size="sm" type="submit" variant="secondary">
            Apply
          </Button>

          {filterApplied && (
            <Button
              sime="sm"
              type="button"
              variant="outline-danger"
              onClick={clearFilterHandler}
            >
              Clear Filter
            </Button>
          )}
        </div>
      </Form>
    </div>
  );
};

export default Search;
