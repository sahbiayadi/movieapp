import React from "react";
import ReactStars from "react-rating-stars-component";
function MovieCard({ el }) {
  return (
    <div className="card">
      <img src={el.posterurl} />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h4>{el.name}</h4>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ReactStars
          count={5}
          size={24}
          activeColor="red"
          edit={false}
          value={el.rating}
        />
      </div>
      ,
    </div>
  );
}

export default MovieCard;
