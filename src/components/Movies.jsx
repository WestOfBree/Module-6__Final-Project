import React from "react";
import Loading from "./ui/Loading.jsx";
import { useNavigate } from "react-router-dom";

function Movies({
  userQuery,
  results,
  loading,
  error,
  fetchResults,
}) {
  const navigate = useNavigate();
  const [brokenPosters, setBrokenPosters] = React.useState({});
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
          results.map((results) => {
            const movieId = results.id || results.imdbID;
            const posterSrc = results.Poster || results.poster;
            const hasValidPoster = posterSrc && posterSrc !== "N/A" && !brokenPosters[movieId];

            return (
            <div className="movie-card" key={movieId}>
              <div className="movie__poster">
                {hasValidPoster ? (
                  <img
                    src={posterSrc}
                    onClick={() => navigate(`/Summary/${results.imdbID || results.id}`)}
                    style={{ cursor: "pointer" }}
                    alt="movie poster"
                    onError={() => {
                      setBrokenPosters((prev) => ({ ...prev, [movieId]: true }));
                    }}
                  />
                ) : (
                  <div className="movie__poster--placeholder">
                    movie poster not available
                  </div>
                )}
              </div>
              <div className="movie__name">{results.Title || results.title}</div>
              <div className="movie__year">
                {results.Year || results.year || "N/A"}
              </div>
            </div>
            );
          })
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
