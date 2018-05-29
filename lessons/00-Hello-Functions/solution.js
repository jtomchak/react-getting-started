import React from "react";
import ReactDOM from "react-dom";

var ce = React.createElement;

var MyTitle = function(props) {
  const style = { color: props.color };
  return ce("div", null, ce("h1", { style: style }, props.title));
};

var MyFirstComponent = function() {
  return ce(
    "div",
    null,
    ce(MyTitle, {
      color: "rebeccapurple",
      title: "Hans Solo, A movie about stuff"
    }),
    ce(MyTitle, { color: "peru", title: "Return of the Jedi" }),
    ce(MyTitle, { color: "burlywood", title: "A New Hope" })
  );
};

ReactDOM.render(ce(MyFirstComponent), document.getElementById("app"));
