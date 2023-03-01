import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// import AddTutorial from "./components/add-tutorial.component";
// import Tutorial from "./components/tutorial.component";
import JourneysList from "./components/journeys-list.component";

class App extends Component {
  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/tutorials"} className="nav-link">
                Journeys
              </Link>
            </li>
            <li className="nav-item">
            <a href="http://localhost:3001/new/1" target="_blank">Create new journey</a>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/tutorials"]} component={JourneysList} />
            {/* <Route exact path="/add" component={AddTutorial} />
            <Route path="/tutorials/:id" component={Tutorial} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
