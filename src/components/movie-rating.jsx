import React from "react";
const MovieRating = ({ rating }) => (
  <span className="flex items-center gap-1">
    <Star size={13} className="text-gray-300 fill-gray-300" />
    {rating}
  </span>
);

export default MovieRating;
