import React from "react";
import Loading from "./ui/Loading.jsx";


function Movies({
  moviesData,
  userQuery,
  allResults,
  movies,
  results,
  loading,
}) {

  function inConstructionAlert(){
  alert("This feature is still in construction. Please check back later!");
}

  return (
    <div className="movies__container">
      <div className="results__container">
        {!loading ? (
          movies.map((movie) => (
            <div className="movie-card" key={movie.id || movie.imdbID}>
              <div className="movie__poster">
                <img src={movie.Poster || movie.poster} onClick={() => inConstructionAlert()} alt="movie poster" />
              </div>
              <div className="movie__name">{movie.Title || movie.title}</div>
              <div className="movie__rating">
                {movie.imdbRating || movie.rating || "N/A"}
              </div>
            </div>
          ))
        ) : ((
          <Loading loading={loading} />
        ))}
      </div>
    </div>
  );
}

export default Movies;
