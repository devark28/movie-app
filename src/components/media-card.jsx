import React from "react";
import { Star } from "lucide-react";

const MediaCard = ({ type, year, title, rating, imageUrl, id }) => (
  <div
    role="group"
    // ariaRoledescription="slide"
    className="min-w-0 shrink-0 grow-0 basis-[32%] sm:basis-1/4 lg:basis-1/5 xl:basis-[14.28%] 2xl:basis-[12.5%] p-[.4rem] sm:p-2 !shrink-0 max-w-[12rem] !select-none"
  >
    <div className="flex w-full cursor-pointer relative">
      <div className="size-full">
        <div className="flex flex-col w-full gap-1 sm:gap-2">
          <a
            className="bg-white/5 w-full !aspect-[1.44/2] flex hover:scale-105 rounded-xl overflow-hidden smoothie relative group"
            href={`/watch/${type}/${id}`}
          >
            <img
              width="100%"
              height="100%"
              src={imageUrl}
              className="size-full object-cover object-center !select-none shrink-0"
              alt={title}
            />
            <span className="flex flex-col gap-1 absolute items-end text-xs right-1 top-1 smoothie">
              <span className="bg-black/75 p-[.1rem] px-1 gap-1 rounded-md flex items-center">
                <Star className="size-3" fill="gold" stroke="gold" />
                {rating}
              </span>
            </span>
          </a>
          <a
            className="flex w-full flex-col gap-1 lg:hidden"
            href={`/watch/${type}/${id}`}
          >
            <div className="flex text-xs text-gray-300 justify-between">
              <span className="uppercase">{type}</span>
              <span>{year}</span>
            </div>
            <div className="flex w-full text-[.82rem] sm:text-sm font-medium !line-clamp-2 tracking-wider">
              {title}
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default MediaCard;
