import React from "react";
import MovieSlide from "./movie-slide";
const MovieCarousel = ({ movies }) => {
  return (
    <div className="flex flex-col w-full gap-10 z-0 relative px-3 2xl:px-5">
      <div className="z-0 !shrink-0 flex flex-col w-full aspect-[2/.63] lg:aspect-[2/.6] shadow p-54 overflow-hidden rounded-[1.4rem] 2xl:rounded-3xl">
        <div className="swiper swiper-initialized swiper-horizontal size-full flex relative overflow-x-auto !select-none">
          <div className="swiper-wrapper">
            {movies.map((movie, index) => (
              <div
                key={movie.id}
                className="swiper-slide size-full flex-shrink-0 !select-none bg-white/5 relative block rounded-[1.4rem] 2xl:rounded-3xl overflow-hidden"
                title={movie.title}
              >
                <MovieSlide movie={movie} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCarousel;
