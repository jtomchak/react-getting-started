////////////////////////////////////////////////////////////////////////////////
/*
 Exercise:
 - import the Array of objects from movies.js 
 - render the Movies Component to the DOM elemend with id 'app'
 - transform the Array of movie objects into an Array of react 'li' elements with movie title and episode id
 - render the Array of transformed react elements in a 'ul' tag
 - if the movie doesn't have an episode number, use the the tagline "A Starwars Story"

 Stretch Goal:
 - use bootstrap list-group to make our list a bit nicer to look at
 - center the list horizontally with inline style
 - refactor the logic for listing movies into it's own Component, MovieList that takes for a prop an Array of Movie Objects
*/
////////////////////////////////////////////////////////////////////////////////

import React from "react";
import ReactDOM from "react-dom";
import "../utils/bootstrap-add"; //add bootstrap as a dependency
//import movies.js file

const Movies = () => {
  return (
    <div>
      <h1>All the Starwars Movies</h1>
    </div>
  );
};
