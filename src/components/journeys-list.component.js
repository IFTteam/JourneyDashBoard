import React, { Component } from "react";
import { connect } from "react-redux";
import {
  retrieveJourneys,
  //findTutorialsByTitle,
  //deleteAllTutorials,
} from "../actions/journeys";
import { Link } from "react-router-dom";

class JourneysList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.refreshData = this.refreshData.bind(this);
    // this.setActiveTutorial = this.setActiveTutorial.bind(this);
    // this.findByTitle = this.findByTitle.bind(this);
    // this.removeAllTutorials = this.removeAllTutorials.bind(this);

    this.state = {
      currentJourney: null,
      currentIndex: -1,
      searchTitle: "",
    };
  }

  componentDidMount() {
    this.props.retrieveJourneys();
  }

  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle,
    });
  }

  refreshData() {
    this.setState({
      currentJourney: null,
      currentIndex: -1,
    });
  }


  

  // setActiveTutorial(tutorial, index) {
  //   this.setState({
  //     currentJourney: tutorial,
  //     currentIndex: index,
  //   });
  // }

  // removeAllTutorials() {
  //   this.props
  //     .deleteAllTutorials()
  //     .then((response) => {
  //       console.log(response);
  //       this.refreshData();
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // }

  // findByTitle() {
  //   this.refreshData();

  //   this.props.findTutorialsByTitle(this.state.searchTitle);
  // }

  render() {
    const { searchTitle, currentJourney, currentIndex } = this.state;
    const { journeys } = this.props;
    
    return (
      <div className="list row">
        {/* <div className="col-md-8"> */}
          {/* <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by title"
              value={searchTitle}
              onChange={this.onChangeSearchTitle}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.findByTitle}
              >
                Search
              </button>
            </div>
          </div>
        </div> */}
        <div className="col-md-6">
          <h4>Journeys List</h4>

          <ul className="list-group">
            {journeys &&
              journeys.map((journey, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  key={index}
                >
                <a href = {journey.frontendJourneyId} target="_blank">
                  {journey.journeyName}
                  {journey.frontEndJourneyId}
                </a>

                </li>
              ))}
          </ul>
{/* 
          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllTutorials}
          >
            Remove All
          </button> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    journeys: state.journeys,
  };
};

export default connect(mapStateToProps, {
  retrieveJourneys,
 // findTutorialsByTitle,
  //deleteAllTutorials,
})(JourneysList);
