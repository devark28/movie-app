import React from "react";
import MediaCard from "./media-card";
import CarouselButton from "./carousel-button";

const MediaCarousel = ({ title, items, type = "movie" }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const maxSlides = Math.ceil(items.length / 7) - 1; // Assuming 7 items per slide for XL breakpoint

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => Math.max(0, prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => Math.min(maxSlides, prev + 1));
  };

  return (
    <div className="flex flex-col gap-16">
      <div
        className="relative w-full"
        role="region"
        // ariaRoledescription="carousel"
      >
        <div className="flex flex-col w-full gap-3 tracking-wide">
          <div className="w-full flex items-center justify-between">
            <div className="text-[1.35rem] font-medium px-1">{title}</div>
            <div className="hidden md:flex items-center rounded-xl overflow-hidden justify-center gap-[1px]">
              <CarouselButton
                direction="prev"
                onClick={handlePrevSlide}
                disabled={currentSlide === 0}
              />
              <CarouselButton
                direction="next"
                onClick={handleNextSlide}
                disabled={currentSlide === maxSlides}
              />
            </div>
          </div>
          <div className="flex w-full">
            <div className="size-full">
              <div
                className="flex transition-transform duration-300"
                style={{
                  transform: `translate3d(${-currentSlide * 100}%, 0px, 0px)`,
                }}
              >
                {items.map((item) => (
                  <MediaCard
                    key={item.id}
                    type={type}
                    year={item.year}
                    title={item.title}
                    rating={item.rating}
                    imageUrl={item.imageUrl}
                    id={item.id}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaCarousel;
