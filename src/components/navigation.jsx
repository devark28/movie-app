import React from "react";
import NavLink from "./nav-link";
import NavigationContainer from "./navigation-container";
import {
  MovieIcon,
  TvIcon,
  KDramaIcon,
  AnimeIcon,
  MangaIcon,
  LiveTvIcon,
  ClockIcon,
  HeartIcon,
  SettingsIcon
} from './icons';

const Navigation = () => {
  return (
    <div style={{
      flex: "18 1 0px",
      overflow: "hidden",
    }}>
      <div className="flex flex-col size-full items-center">
        <NavigationContainer>
          <NavLink
            href="https://freek.to/explore/movie"
            icon={
              <MovieIcon
                className="fill-slate-50 shrink-0"
                width={25.5}
                height={25.5}
              />
            }
          >
            Movies
          </NavLink>
          <NavLink
            href="https://freek.to/explore/tv"
            icon={
              <TvIcon className="fill-slate-50 shrink-0" width={24} height={24} />
            }
          >
            Tv Shows
          </NavLink>
          <NavLink
            href="https://freek.to/explore/k-drama"
            icon={
              <KDramaIcon
                className="fill-slate-50 shrink-0"
                width={25}
                height={25}
              />
            }
          >
            K Drama
          </NavLink>
          <NavLink
            href="https://freek.to/explore/anime"
            icon={
              <AnimeIcon
                className="fill-slate-100 shrink-0"
                width={25}
                height={25}
              />
            }
          >
            Anime
          </NavLink>
          <NavLink
            href="https://freek.to/explore/manga"
            icon={
              <MangaIcon
                className="fill-slate-100 shrink-0"
                width={26}
                height={26}
              />
            }
          >
            Manga
          </NavLink>
          <NavLink
            href="https://freek.to/explore/live-tv"
            icon={
              <LiveTvIcon className="stroke-slate-300" width={24} height={24} />
            }
          >
            Live Tv
          </NavLink>
          <NavLink
            href="https://freek.to/history"
            icon={<ClockIcon className="text-slate-100" width={24} height={24} />}
            className="mt-auto"
          >
            History
          </NavLink>
          <NavLink
            href="https://freek.to/watchlist"
            icon={<HeartIcon width={23.5} height={23.5} />}
          >
            WatchList
          </NavLink>
          <NavLink
            href="https://freek.to/settings"
            icon={
              <SettingsIcon
                className="fill-slate-50 shrink-0"
                width={24}
                height={24}
              />
            }
          >
            Settings
          </NavLink>
        </NavigationContainer>
      </div>
    </div>
  );
};

export default Navigation;
