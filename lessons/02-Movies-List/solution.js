import React from "react";
import ReactDOM from "react-dom";
import "../utils/bootstrap-add";
//import movies file
import starwarsMovies from "./movies";


const Movies = () => {
  const movieListElements = starwarsMovies.map(movie => (
    <li className="list-group-item" key={movie.id}>
        {movie.title} - {movie.episode ? `Episode ${movie.episode}` : `A Starwars Story`}
    </li>
  ));
  return (
    <div style={{textAlign: "center"}}>
      <ul  style={{display: "inline-block", textAlign: "left"}} className="list-group">{movieListElements}</ul>
    </div>
  );
};

ReactDOM.render(<Movies />, document.getElementById("app"));
