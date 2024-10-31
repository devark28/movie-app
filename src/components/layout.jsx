import React from "react";
import Header from "./header";
import Footer from "./footer";
import MovieCarousel from "./movie-carousel";
import MediaSection from "./media-section";

const Layout = () => (
  <div
    id="center-div"
    className="size-full flex flex-col gap-4 relative overflow-x-hidden overflow-y-auto"
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
    {/* <MovieCarousel /> */}
    <MediaSection />
    <Footer />
  </div>
);

export default Layout;
