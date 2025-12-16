import React from "react";
import Loading from "./ui/Loading.jsx";


function Movies({
  userQuery,
  results,
  loading,
  error,
  fetchResults,
}) {

    const [yearRange, setYearRange] = React.useState(2023);
    const [sortOrder, setSortOrder] = React.useState("desc");
  // Validate results prop
  if (!Array.isArray(results)) {
    return (
      <div className="no--results">
        <h2>Error: Invalid results data. Please try again.</h2>
      </div>
    );
  }

const getYear = (item) => {
    const raw = item.Year ?? item.year;
    if (!raw) return 0;
    const match = String(raw).match(/\d{4}/);
    return match ? parseInt(match[0], 10) : 0;
};

const toggleSort = () => {
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
};

// ensure yearRange is treated as a number when filtering
const yearLimit = Number(yearRange);

// filter by year slider, then sort by year according to sortOrder
const processedResults = [...results]
    .filter((item) => getYear(item) <= yearLimit)
    .sort((a, b) => {
        const ya = getYear(a);
        const yb = getYear(b);
        return sortOrder === "asc" ? ya - yb : yb - ya;
    });

return results.length > 0 ? (
    <div className="movies__container">
        <div className="year__slider">
            <input
                type="range"
                min="1980"
                max="2023"
                step="1"
                value={yearRange}
                onChange={(e) => setYearRange(Number(e.target.value))}
            />
            <span>Filter by Year: {yearRange}</span>
            <button type="button" onClick={toggleSort} style={{ marginLeft: 12 }}>
                Sort by Year: {sortOrder === "asc" ? "Ascending" : "Descending"}
            </button>
        </div>
        
        <div className="results__container">
            {!loading ? (
                processedResults.map((results) => (
                    <div className="movie-card" key={results.id || results.imdbID}>
                        <div className="movie__poster">
                            <img src={results.Poster || results.poster} onClick={() => alert("This feature is still in construction. Please check back later!")} alt="movie poster" />
                        </div>
                        <div className="movie__name">{results.Title || results.title}</div>
                        <div className="movie__year">
                            {results.Year || results.year || "N/A"}
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
