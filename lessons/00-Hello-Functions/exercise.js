///////////////////////////////////////////////////////
/*
Creating a couple components using createElement. JSX is just syntactic sugar that is transpiled to createElement
createElement arguments is element-type ('div', 'h1'), attributes to that element, child nodes to that element. 
React.createElement(
  type,
  [props],
  [...children]
)

Exercise:
- Create a reusable 'Title' function that will take a movie title and unique color and return a 'div' element with child 'h1'
with that particular movie title styled with the unique color. 
- Add 3 'Title' components as childern in 'MyFirstComponent' so that it renders onto the DOM.
- See it update auto-magiclly in the browser, thanks to some sweet build pipelines.
*/
////////////////////////////////////////////////////////
import React from "react";
import ReactDOM from "react-dom";


const MyFirstComponent = React.createElement("div", null, "Starting  React");

ReactDOM.render(MyFirstComponent, document.getElementById("app"));

