import React from "react";
import ReactDOM from "react-dom";
import Proptypes from 'prop-types';

var ce = React.createElement;

export const Title = function(props) {
  const style = { color: props.color };
  return ce("h1", { style: style }, props.title);
};

//Contract with PropTypes
//https://reactjs.org/docs/typechecking-with-proptypes.html
Title.proptypes = {
  color: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired
}

export const MyFirstComponent = function() {
  return ce(
    "div",
    null,
    ce(Title, {
      color: "rebeccapurple",
      title: "Han Solo, A movie about stuff"
    }),
    ce(Title, { color: "peru", title: "Return of the Jedi" }),
    ce(Title, { color: "burlywood", title: "A New Hope" })
  );
};

ReactDOM.render(ce(MyFirstComponent), document.getElementById("app"));
