import { NavLink } from "react-router-dom";
import { List } from "phosphor-react";

import Logo from "./Logo";
import { Search } from "./Search";

interface NavBarProps {
    toggleMenu(value: boolean): void;
    stateMenu: boolean;
}

export function Navbar({ toggleMenu, stateMenu }: NavBarProps) {
    return (
        <>
            <nav className="w-full h-auto bg-zinc-800 flex flex-row justify-between items-center notebook:px-10 px-5 py-4 notebook:gap-8 gap-5 tablet:relative fixed z-20">
                <div>
                    <NavLink to={`/`}>
                        <Logo width="225px" height="35px" />
                    </NavLink>
                </div>
                <div className="mobile:flex mobile:flex-row hidden justify-end flex-1">
                    <Search toggleMenu={toggleMenu} stateMenu={stateMenu} />
                </div>
                <div className="flex flex-row tablet:gap-8 gap-4 items-center">
                    <button
                        type="button"
                        className="inline-flex items-center py-2 px-3 border border-zinc-600 rounded focus:border-zinc-400 hover:border-zinc-400 transition-colors group"
                        onClick={() => toggleMenu(!stateMenu)}
                    >
                        <span className="sr-only">Open menu</span>
                        <List size={28} weight="bold" className="text-zinc-500 group-focus:text-zinc-400 group-hover:text-zinc-400 transition-colors" />
                    </button>
                </div>
            </nav>
        </>
    );
}