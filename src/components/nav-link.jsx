const NavLink = ({ href, icon, children, isActive = false, className = '' }) => {
    const baseClasses = "shrink-0 flex p-2 gap-5 items-center font-semibold tracking-wide rounded-lg smoothie group w-full";
    const activeClasses = isActive ? "!text-white" : "hover:text-white hover:!fill-white text-gray-300";

    return (
        <a
            href={href}
            className={`${baseClasses} ${activeClasses} ${className}`}
        >
            {icon}
            {children}
        </a>
    );
};

export default NavLink;