import React from "react";
import MovieInfo from "./movie-info";
// import MoviePoster from "./movie-poster";
// import BackgroundImage from "./background-image";
const MovieSlide = ({ movie }) => (
  <div className="flex size-full tracking-wide smoothie">
    {/* <BackgroundImage src={movie.backgroundImage} /> */}
    <MovieInfo {...movie} />
    <div className="flex w-1/2 smoothie">
      <div className="w-[62%] mx-auto rounded-[1.4rem] relative 2xl:rounded-3xl group smoothie">
        {/* <MoviePoster src={movie.posterImage} /> */}
      </div>
    </div>
  </div>
);

export default MovieSlide;
