import React from 'react';
import { Search } from 'lucide-react';

const SearchInput = () => (
    <div className="relative flex-grow flex items-center">
        <button
            type="button"
            // ariaHaspopup="dialog"
            // ariaExpanded="false"
            // dataState="closed"
            className="flex items-center w-full"
        >
            <div className="flex-grow relative max-w-[30rem] mr-auto bg-white/[.08] rounded-[2rem] group focus-within:bg-white/15 smoothie overflow-hidden h-10 ring-[.025em] ring-white/20 ml-1">
                <div className="flex items-center justify-center absolute top-1/2 -translate-y-1/2 w-12 left-0">
                    <Search className="text-white/30" size={20} />
                </div>
                <input
                    type="text"
                    name="search-input"
                    id="search-input"
                    placeholder="Search..."
                    className="bg-transparent size-full p-3 pl-12 !text-sm 2xl:!text-base !text-gray-100 tracking-wider"
                    value=""
                    onChange={() => { }}
                />
            </div>
        </button>
    </div>
);

export default SearchInput;