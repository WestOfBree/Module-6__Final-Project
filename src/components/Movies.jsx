import React from "react";
import Loading from "./ui/Loading.jsx";

function Movies({
  userQuery,
  results,
  loading,
  error,
  fetchResults,
}) {
  // Validate results prop
  if (!Array.isArray(results)) {
    return (
      <div className="no--results">
        <h2>Error: Invalid results data. Please try again.</h2>
      </div>
    );
  }

  return results.length > 0 ? (
    <div className="movies__container">
      <div className="results__container">
        {!loading ? (
          results.map((results) => (
            <div className="movie-card" key={results.id || results.imdbID}>
              <div className="movie__poster">
                <img src={results.Poster || results.poster} onClick={() => alert("This feature is still in construction. Please check back later!")} alt="movie poster" />
              </div>
              <div className="movie__name">{results.Title || results.title}</div>
              <div className="movie__rating">
                {results.imdbRating || results.rating || "N/A"}
              </div>
            </div>
          ))
        ) : (
          <Loading loading={loading} />
        )}
      </div>
    </div>
  ) : (
    <div className="no--results">
      <h2>No results found for "{userQuery}". Please try a different search.</h2>
    </div>
  );
}

export default Movies;
