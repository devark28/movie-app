import React from "react";
import MediaCarousel from "./media-carousel";
const MediaSection = () => {
  // Example data - in real usage this would come from props or API
  const movieData = [
    {
      id: 698687,
      title: "Transformers One",
      year: 2024,
      rating: 8.0,
      imageUrl: "/path/to/image",
    },
    {
      id: 533535,
      title: "Deadpool & Wolverine",
      year: 2024,
      rating: 7.7,
      imageUrl: "/path/to/image",
    },
    // ... more movies
  ];

  const showData = [
    {
      id: 12345,
      title: "Example Show 1",
      year: 2024,
      rating: 8.5,
      imageUrl: "/path/to/image",
    },
    {
      id: 67890,
      title: "Example Show 2",
      year: 2024,
      rating: 7.9,
      imageUrl: "/path/to/image",
    },
    // ... more shows
  ];

  return (
    <>
      <MediaCarousel title="Trending Movies" items={movieData} type="movie" />
      <MediaCarousel title="Trending Shows" items={showData} type="show" />
    </>
  );
};

export default MediaSection;
