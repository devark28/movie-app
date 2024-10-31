import React from "react";
import MovieActions from "./movie-actions";
import MovieMetadata from "./movie-metadata";
const MovieInfo = ({
  title,
  type,
  releaseDate,
  rating,
  description,
  watchHref,
  onAddClick,
}) => (
  <div className="w-1/2 xl:p-10 p-6 flex z-10 flex-col gap-3 lg:gap-4 xl:gap-6 2xl:gap-8 my-auto smoothie">
    <div className="flex flex-col gap-1 lg:gap-2 xl:gap-3 2xl:gap-4 px-1">
      {/* <MovieLogo title={title} /> */}
      <MovieMetadata type={type} releaseDate={releaseDate} rating={rating} />
      <p className="text-gray-300 tracking-wide text-sm line-clamp-2 2xl:!line-clamp-3 2xl:-mt-1 leading-tight lg:leading-snug">
        {description}
      </p>
    </div>
    <MovieActions watchHref={watchHref} onAddClick={onAddClick} />
  </div>
);

export default MovieInfo;
