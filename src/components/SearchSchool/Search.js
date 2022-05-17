import { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import classes from "./Search.module.css";

const Search = (props) => {
  const stateRef = useRef();
  const zipRef = useRef();

  const [filterApplied, setFilterApplied] = useState(false);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setFilterApplied(true);
    props.filterColleges(stateRef.current.value, zipRef.current.value);
  };

  const clearFilterHandler = () => {
    setFilterApplied(false);
    document.getElementById("formSearch").reset();
    props.clearFilter()
  };

  return (
    <div className={classes.seacrh}>
      <p>START YOUR SMART SEARCH</p>

      <Form onSubmit={formSubmitHandler} id="formSearch">
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

        <Form.Group className="mb-3">
          <Form.Label>Search by zipcode</Form.Label>
          <Form.Control
            ref={zipRef}
            type="number"
            placeholder="Zipcode"
          ></Form.Control>
        </Form.Group>

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
