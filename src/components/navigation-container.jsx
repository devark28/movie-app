import TopNav from "./top-nav";
import MainNav from "./main-nav";

const NavigationContainer = ({ children }) => {
  return (
    <div className="flex flex-col gap-2 size-full items-center justify-center">
      <TopNav />
      <MainNav>{children}</MainNav>
    </div>
  );
};

export default NavigationContainer;
