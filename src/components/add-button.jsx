import React from "react";
const AddButton = ({ onClick }) => (
  <div>
    <button
      className="bg-white/10 rounded-full overflow-hidden active:bg-white/10 hover:bg-white/15 p-2"
      onClick={onClick}
    >
      <Plus size={20} strokeWidth={2.2} />
    </button>
  </div>
);

export default AddButton;
