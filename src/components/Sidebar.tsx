import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Logo from "./Logo";
import { NavLinkMenu } from "./NavLinkMenu";
import { Search } from "./Search";

interface SidebarProps {
    toggleMenu(value: boolean): void;
    stateMenu: boolean;
}

export function Sidebar({ toggleMenu, stateMenu }: SidebarProps) {
    const [windowSize, setWindowSize] = useState(getWindowSize());

    function getWindowSize() {
        const { innerWidth, innerHeight } = window;
        return { innerWidth, innerHeight };
    }

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return (
        <section className={`w-full min-h-screen fixed top-0 left-0
        ${stateMenu ? 'z-30' : 'invisible'}`}>
            <aside className={`flex flex-col w-full max-w-xs h-screen bg-zinc-800 fixed top-0 left-0 z-40 transition-all duration-300 overflow-y-scroll scrollbar
            ${stateMenu ? 'ml-0' : '-ml-80'}`}>
                <div className="px-4">
                    <div className="pl-6 h-[86px] flex items-center" onClick={() => toggleMenu(false)}>
                        <Link to={`/`}>
                            <Logo width="225px" height="35px" />
                        </Link>
                    </div>

                    <div className="mobile:hidden flex w-full mt-5">
                        <Search toggleMenu={toggleMenu} stateMenu={stateMenu} />
                    </div>
                    <div className="flex flex-col gap-4 mt-8">
                        <NavLinkMenu
                            to="/"
                            end
                            window_size={windowSize.innerWidth}
                            label="Descobrir"
                            openMenu={stateMenu}
                            setToggleMenu={toggleMenu}
                        />
                        <NavLinkMenu
                            to="/categories"
                            end
                            window_size={windowSize.innerWidth}
                            label="Categorias"
                            openMenu={stateMenu}
                            setToggleMenu={toggleMenu}
                        />
                        <NavLinkMenu
                            to="/top-rated"
                            window_size={windowSize.innerWidth}
                            label="Top Filmes"
                            openMenu={stateMenu}
                            setToggleMenu={toggleMenu}
                        />
                        <NavLinkMenu
                            to="/now-playing"
                            window_size={windowSize.innerWidth}
                            label="Em Cartaz"
                            openMenu={stateMenu}
                            setToggleMenu={toggleMenu}
                        />
                        <NavLinkMenu
                            to="/upcoming"
                            window_size={windowSize.innerWidth}
                            label="Estreias"
                            openMenu={stateMenu}
                            setToggleMenu={toggleMenu}
                        />
                    </div>
                </div>
            </aside>
            <div
                className={`w-full h-screen fixed bg-zinc-900 bg-opacity-60 cursor-pointer transition-all
                ${stateMenu ? 'visible opacity-100' : 'invisible opacity-0'}`}
                onClick={() => toggleMenu(false)}
            />
        </section>
    );
}