import { ChevronLeft, ChevronRight } from "lucide-react";
import NavButton from "./nav-button";

const HeaderNavigation = () => (
    <div className="flex gap-2 items-center">
        <NavButton icon={ChevronLeft} disabled />
        <NavButton icon={ChevronRight} disabled />
    </div>
);

export default HeaderNavigation;