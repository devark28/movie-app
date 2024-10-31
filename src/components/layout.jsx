import React from "react";
import Header from "./header";
import Footer from "./footer";
import MovieCarousel from "./movie-carousel";
import MediaSection from "./media-section";

const Layout = () => {
  const movies = [
    {
      id: "1034541",
      title: "Terrifier 3",
      type: "MOVIE",
      releaseDate: "Oct 9, 2024",
      rating: "7.1",
      description: "Five years after surviving Art the Clown's Halloween massacre, Sienna and Jonathan are still struggling to rebuild their shattered lives. As the holiday season approaches, they try to embrace the Christmas spirit and leave the horrors of the past behind. But just when they think they're safe, Art returns, determined to turn their holiday cheer into a new nightmare. The festive season quickly unravels as Art unleashes his twisted brand of terror, proving that no holiday is safe.",
      watchHref: "https://freek.to/watch/movie/1034541",
      backgroundImage: "http://image.tmdb.org/t/p/w342/jaBToJ1DZcwn5wOsQeLOXFVlBLn.jpg",
      posterImage: "http://image.tmdb.org/t/p/w342/jaBToJ1DZcwn5wOsQeLOXFVlBLn.jpg",
      logoImage: "http://image.tmdb.org/t/p/w342/jaBToJ1DZcwn5wOsQeLOXFVlBLn.jpg"
    },
    // ... other movies
  ];
  return (
    <div
      id="center-div"
      className="size-full flex flex-col gap-4 relative overflow-x-hidden overflow-y-auto"
      style={{
        flex: "82 1 0px",
        // overflow: "hidden",
      }}
    >
      <div className="absolute top-0 right-0 left-0 blur-3xl !z-[-1] pointer-events-none brightness-50 opacity-90 !max-h-[60%] overflow-hidden">
        <span className="lazy-load-image-background opacity lazy-load-image-loaded">
          <img
            width="100%"
            height="100%"
            src="/api/placeholder/400/320"
            alt="background"
            className="size-full object-cover object-center !select-none shrink-0 transition-all !duration-1000 opacity-100"
          />
        </span>
      </div>
      <Header />
      <MovieCarousel movies={movies} />
      <MediaSection />
      <Footer />
    </div>
  )
};

export default Layout;
