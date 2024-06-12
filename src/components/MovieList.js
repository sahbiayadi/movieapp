import React from "react";
import MovieAdd from "./MovieAdd";
import MovieCard from "./MovieCard";

function MovieList({ movies, setmovies, text, rate }) {
  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
      >
        <MovieAdd movies={movies} setmovies={setmovies} />
      </div>
      <div className="box">
        {movies
          .filter(
            (el) =>
              el.name.toLowerCase().includes(text.toLowerCase()) &&
              el.rating >= rate
          )
          .map((el) => <MovieCard el={el} />)
          .reverse()}
      </div>
    </div>
  );
}

export default MovieList;
