import React from "react";
import Loading from "./ui/Loading.jsx";

// function Movies({  moviesData, movies, userQuery, allResults, movie}) {
//     console.log(movies);
//     return (
//          <div className="movie-card-list">
//         {movies
//           .filter((movie) => !!movie.imdbID)
//           .map((movie) => (
//             <div className="movie-card" key={movie.imdbID}>
//               <div className="movie__poster">
//                 <img
//                   src={movie.Poster && movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/150x220?text=No+Image'}
//                   className="movie__poster-img"
//                   alt={movie.Title}
//                 />
//               </div>
//               <div className="movie__name">{movie.Title}</div>
//               <div className="movie__rating">{movie.Year}</div>
//             </div>
//           ))}
//       </div>
//     );
// }

// export default Movies;

function Movies({ moviesData, userQuery, allResults, movies, results }) {
// const filteredMovies = moviesData?.filter((movie) =>
//     movie.Title?.toLowerCase().includes(userQuery?.toLowerCase() || "")
// ) || [];

return (
    <div className="results__container">
        <h1>Movies Component</h1>
        <p>Search query: {userQuery}</p>
        <div className="results__container">
            <div>
            {movies.map((movie) => (
                <div className="movie-card" key={movie.id || movie.imdbID}>
                    <div className="movie__poster">
                        <img src={movie.Poster || movie.poster} alt="movie poster" />
                    </div>
                    <div className="movie__name">{movie.Title || movie.title}</div>
                    <div className="movie__rating">
                        {movie.imdbRating || movie.rating || "N/A"}
                    </div>
                
                </div>
            ))}
        </div>
        </div>
    </div>
);
}

export default Movies;
