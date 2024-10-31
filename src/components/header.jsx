import React from "react";
import HeaderNavigation from "./header-navigation";
import SearchInput from "./search-input";
import LoginButton from "./login-button";

const Header = () => (
  <div className="w-full flex flex-col py-3 px-4 2xl:py-4 2xl:px-6 will-change-auto z-20 sticky top-[-1px] smoothie transition-transform duration-300 translate-y-0 opacity-100 bg-transparent">
    <div className="w-full h-fit gap-3 flex items-center">
      <HeaderNavigation />
      <SearchInput />
      <div className="flex items-center gap-4 ml-auto">
        <LoginButton />
      </div>
    </div>
  </div>
);

export default Header;
