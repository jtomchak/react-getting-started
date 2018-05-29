////////////////////////////////////////////////////////////////////////////////
/*
 Exercise:
 - use the functions from Hello-Functions and rewrite it using JSX 
 - remember Babel will transform JSX from markup to the functions we just wrote
*/
////////////////////////////////////////////////////////////////////////////////
import React from "react";
import ReactDOM from "react-dom";


function MyFirstComponent() {
  return <div>What Movies did you pick?</div>;
}

ReactDOM.render(<MyFirstComponent />, document.getElementById("app"));
