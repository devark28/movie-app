import React from 'react';
const NavButton = ({ icon: Icon, disabled = false }) => (
    <button
        disabled={disabled}
        className="bg-white/10 p-1 size-8 rounded-full shadow-md !brightness-75"
    >
        <Icon />
    </button>
);

export default NavButton;