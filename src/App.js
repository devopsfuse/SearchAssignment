import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { Switch } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login/Login";
import SchoolDetail from "./pages/SchoolDetail/SchoolDetail";
import SearchSchool from "./pages/SearchSchool/SearchSchool";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/login" />
      </Route>

      <Route path="/login" exact>
        <Login />
      </Route>

      <Route path="/school-search" exact>
        <SearchSchool />
      </Route>

      <Route path="/school-detail" exact>
        <SchoolDetail />
      </Route>
    </Switch>
  );
}

export default App;
