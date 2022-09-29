import { FormEvent, useEffect, useState } from "react";
import { List } from "phosphor-react";

import { NavLink, useNavigate } from "react-router-dom";
import { NavLinkMenu } from "./NavLinkMenu";

import Logo from "./Logo";

export function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);
    const [windowSize, setWindowSize] = useState(getWindowSize());
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    function toggleMenu() {
        setOpenMenu(!openMenu);
    }

    function getWindowSize() {
        const { innerWidth, innerHeight } = window;
        return { innerWidth, innerHeight };
    }

    function handleSubmit(event: FormEvent) {
        event.preventDefault();

        if (!search) return;

        navigate(`/search?q=${search}`, { replace: true });
        setSearch('');
    };

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
        <>
            <nav className="w-full h-auto bg-zinc-800 flex flex-row justify-between items-center notebook:px-10 px-5 py-4 notebook:gap-8 gap-5 tablet:relative fixed z-20">
                <div>
                    <NavLink to={`/`}>
                        <Logo width="225px" height="35px" />
                    </NavLink>
                </div>
                <div className={`tablet:flex tablet:flex-row notebook:gap-8 tablet:gap-5 flex-1 justify-end items-center ${openMenu && windowSize.innerWidth <= 992 ? 'absolute top-full mt-5 w-full left-0 flex flex-col px-3' : openMenu === false && 'hidden'}`}>
                    <ul className={`flex flex-1 tablet:flex-row items-center justify-end notebook:gap-8 tablet:gap-3 tablet:order-1 order-2 ${openMenu && windowSize.innerWidth <= 992 && 'w-full flex-col bg-zinc-800 py-5 rounded gap-3 px-3 max-w-[600px] mt-4'}`}>
                        <li className="contents">
                            <NavLinkMenu
                                to="/"
                                end
                                window_size={windowSize.innerWidth}
                                label="Descobrir"
                                openMenu={openMenu}
                                setToggleMenu={toggleMenu}
                            />
                        </li>
                        <li className="contents">
                            <NavLinkMenu
                                to="/top-rated"
                                window_size={windowSize.innerWidth}
                                label="Top Filmes"
                                openMenu={openMenu}
                                setToggleMenu={toggleMenu}
                            />
                        </li>
                        <li className="contents">
                            <NavLinkMenu
                                to="/now-playing"
                                window_size={windowSize.innerWidth}
                                label="Em Cartaz"
                                openMenu={openMenu}
                                setToggleMenu={toggleMenu}
                            />
                        </li>
                        <li className="contents">
                            <NavLinkMenu
                                to="/upcoming"
                                window_size={windowSize.innerWidth}
                                label="Estreias"
                                openMenu={openMenu}
                                setToggleMenu={toggleMenu}
                            />
                        </li>
                        {windowSize.innerWidth < 576 &&
                            <li className="contents">
                                <NavLinkMenu
                                    to="/profile"
                                    window_size={windowSize.innerWidth}
                                    label="Perfil"
                                    openMenu={openMenu}
                                    setToggleMenu={toggleMenu}
                                />
                            </li>
                        }
                    </ul>
                    <form className="flex-1 notebook:max-w-sm tablet:max-w-[300px] max-w-[600px] tablet:order-2 order-1 w-full" onSubmit={handleSubmit}>
                        <label
                            htmlFor="search"
                            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
                        >
                            Pesquisar
                        </label>
                        <div className="relative">
                            <input
                                type="search"
                                id="search"
                                placeholder="Buscar Filme..."
                                onChange={(e) => setSearch(e.target.value)}
                                value={search}
                                className="block p-4 w-full text-sm text-zinc-100 bg-zinc-700 rounded-lg border border-zinc-700 outline-none focus:border-red-500"
                            />
                            <button
                                type="submit"
                                className="text-white absolute right-2.5 bottom-2.5 bg-red-600 hover:bg-red-700 font-medium rounded-lg text-sm px-4 py-2"
                            >
                                Buscar
                            </button>
                        </div>
                    </form>
                </div>
                <div className="flex flex-row tablet:gap-8 gap-4 items-center">
                    <button
                        type="button"
                        className="tablet:hidden inline-flex items-center py-2 px-3 border border-zinc-600 rounded focus:border-zinc-300 hover:border-zinc-300 transition-colors group"
                        onClick={() => toggleMenu()}
                    >
                        <span className="sr-only">Open menu</span>
                        <List size={28} weight="bold" className="text-zinc-500 group-focus:text-zinc-300 group-hover:text-zinc-300 transition-colors" />
                    </button>
                    {windowSize.innerWidth >= 576 &&
                        <figure className="w-14 h-14 rounded-full overflow-hidden">
                            <img
                                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                className="max-w-full h-auto"
                                alt=""
                            />
                        </figure>
                    }
                </div>
            </nav>
            <div className={`w-full h-full fixed inset-0 bg-zinc-900 z-10 opacity-90 ${openMenu && windowSize.innerWidth <= 992 ? 'py-4 w-full text-center rounded block' : 'hidden'}`} />
        </>
    );
}