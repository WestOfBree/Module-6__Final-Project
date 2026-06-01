import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loading from "../components/ui/Loading.jsx";
import headerImg from "../assets/movie-face-on-a-poster.jpg";

const API_KEY = "29e531e2";

const DETAIL_FIELDS = [
  { label: "Released",   key: "Released"    },
  { label: "Rating",     key: "Rated"       },
  { label: "Runtime",    key: "Runtime"     },
  { label: "Genre",      key: "Genre"       },
  { label: "Director",   key: "Director"    },
  { label: "Writer",     key: "Writer"      },
  { label: "Actors",     key: "Actors"      },
  { label: "Language",   key: "Language"    },
  { label: "Country",    key: "Country"     },
  { label: "Awards",     key: "Awards"      },
  { label: "Box Office", key: "BoxOffice"   },
  { label: "IMDb Rating",key: "imdbRating"  },
  { label: "IMDb Votes", key: "imdbVotes"   },
];

function Summary() {
  const { imdbID } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!imdbID) return;
    setLoading(true);
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}&plot=full`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (data.Response === "False") throw new Error(data.Error || "Movie not found.");
        setMovie(data);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [imdbID]);

  if (loading) {
    return (
      <div className="summary__loading">
        <Loading loading={true} />
      </div>
    );
  }

  if (error || !movie) {
    return (
      <div className="summary__error">
        <h2>{error || "Movie not found."}</h2>
        <button className="summary__back-btn click" onClick={() => navigate(-1)}>← Back to Results</button>
      </div>
    );
  }

  const posterValid = movie.Poster && movie.Poster !== "N/A";

  return (
<>
       <img
          src={headerImg}
          alt="Movie poster with face illustration"
          className="results__img"
        />
    <div id="summary__row" className="row">
      <div className="summary__page--container">
     
        <h1 className="section__title">
          <span className="color-text">{movie.Title}</span>
        </h1>
        <h2 className="section__sub-title">{movie.Year}</h2>

        <button className="summary__back-btn click" onClick={() => navigate(-1)}>← Back to Results</button>

        <div className="summary__content">
          {/* LEFT – Poster */}
          <div className="summary__poster--wrapper">
            {posterValid ? (
              <img
                className="summary__poster"
                src={movie.Poster}
                alt={`${movie.Title} poster`}
              />
            ) : (
              <div className="summary__poster summary__poster--placeholder">
                No Image Available
              </div>
            )}
            {movie.Ratings && movie.Ratings.length > 0 && (
              <div className="summary__ratings">
                {movie.Ratings.map((r) => (
                  <div key={r.Source} className="summary__rating-pill">
                    <span className="summary__rating-source">{r.Source}</span>
                    <span className="summary__rating-value">{r.Value}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT – Details */}
          <div className="summary__details">
            <p className="summary__plot">{movie.Plot}</p>
            <div className="summary__meta">
              {DETAIL_FIELDS.map(({ label, key }) =>
                movie[key] && movie[key] !== "N/A" ? (
                  <div key={key} className="summary__meta-row">
                    <span className="summary__meta-label">{label}</span>
                    <span className="summary__meta-value">{movie[key]}</span>
                  </div>
                ) : null
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Summary;
