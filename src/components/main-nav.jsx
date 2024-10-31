const MainNav = ({ children }) => {
    return (
        <div className="w-full flex flex-col items-center flex-grow p-3 gap-1 rounded-lg overflow-y-auto xl:rounded-xl bg-white/[.07]">
            {children}
        </div>
    );
};

export default MainNav;