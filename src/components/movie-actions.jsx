import React from "react";
import AddButton from "./add-button";
// import WatchButton from "./watch-button";
const MovieActions = ({ watchHref, onAddClick }) => (
  <div className="flex gap-x-3 text-sm font-medium">
    {/* <WatchButton href={watchHref} /> */}
    <AddButton onClick={onAddClick} />
  </div>
);

export default MovieActions;
