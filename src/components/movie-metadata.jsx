import React from "react";
import MovieRating from "./movie-rating";
const MovieMetadata = ({ type, releaseDate, rating }) => (
  <div className="flex items-center gap-4 text-xs 2xl:text-sm text-gray-300 font-medium tracking-wide">
    <span className="flex items-center">{type}</span>
    <span className="uppercase flex items-center">{releaseDate}</span>
    <MovieRating rating={rating} />
  </div>
);

export default MovieMetadata;
