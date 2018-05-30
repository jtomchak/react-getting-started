///////////////////////////////////////////////////////
/*

Exercise:
- Render a Nav Tab for each of the truck's from the Array, with it's name in the tab
- Should be able to click on each Nav tab and have it set to 'active' while the others are 'inactive'
- Render the right description below the tabs to match the selected truck in the Tabs


*/
////////////////////////////////////////////////////////

import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../utils/bootstrap-add"; //add bootstrap as a dependency

class Tabs extends Component {
  render() {
    return (
      <div>
        <ul className="nav nav-tabs justify-content-center">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Active
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Not Active
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Not Active
            </a>
          </li>
        </ul>
        <div className="my-4 px-5 lead">Truck Description</div>
      </div>
    );
  }
}

const App = props => {
  return (
    <div>
      <div className="jumbotron">
        <h1 className="display-4">Moster Trucks!!! {"\u2728"}</h1>
      </div>
      <Tabs data={props.trucks} />
    </div>
  );
};

const TRUCKS = [
  {
    id: 1,
    name: "Grave Digger",
    description:
      "Originally built out of an old 1957 Chevy Panel Wagon and parts that he scrounged from junkyards, Grave Digger as of today has grown by leaps and bounds"
  },
  {
    id: 2,
    name: "Grease Monkey",
    description:
      "Based on the garage made famous in Discovery Channel's hit television show, Fast N' Loud, the exciting new Gas Monkey Garage® Monster Jam truck was introduced in 2016."
  },
  {
    id: 3,
    name: "Max-D",
    description:
      'Perhaps the most striking Monster Jam® truck on the Monster Jam circuit, the body of Max-DSM is officially classified as a "futuristic SUV." Featuring an orange and silver paint job coupled with a low-to-the-ground, aerodynamic body style, it\'s well-known that Max-D is possibly the fastest machine in the sport.'
  }
];

ReactDOM.render(<App trucks={TRUCKS} />, document.getElementById("app"));
