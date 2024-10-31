import React from "react";
import MediaCarousel from "./media-carousel";
import { movieData } from "../assets/movie-data";
import { showData } from "../assets/show-data";
const MediaSection = () => {

  return (
    <>
      <MediaCarousel title="Trending Movies" items={movieData} type="movie" />
      <MediaCarousel title="Trending Shows" items={showData} type="show" />
    </>
  );
};

export default MediaSection;
