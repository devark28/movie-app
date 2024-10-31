import { Search } from 'lucide-react';
import { HomeIcon } from './icons';
import NavLink from './nav-link';

const TopNav = () => {
    return (
        <div className="w-full flex flex-col p-3 gap-2 rounded-lg xl:rounded-xl bg-white/[.07] shrink-0">
            <NavLink
                href="https://freek.to/"
                icon={<HomeIcon className="fill-slate-50 shrink-0" width={24} height={24} />}
                isActive={true}
            >
                Home
            </NavLink>
            <NavLink
                href="https://freek.to/search"
                icon={<Search className="shrink-0 fill-gray-300 group-hover:fill-white smoothie" width={24} height={24} />}
            >
                Search
            </NavLink>
        </div>
    );
};

export default TopNav;