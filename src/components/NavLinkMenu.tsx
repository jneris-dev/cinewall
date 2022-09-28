import { NavLink, NavLinkProps } from "react-router-dom";

interface NavLinkMenuProps extends NavLinkProps {
    to: string;
    window_size: number;
    setToggleMenu: () => void;
    openMenu: boolean;
    label: string;
}

export function NavLinkMenu({ to, window_size, setToggleMenu, openMenu, label, ...rest }: NavLinkMenuProps) {
    return (
        <NavLink
            to={to}
            {...rest}
            className={({ isActive }) => `transition-colors cursor-pointer border-b-2 ${openMenu && window_size <= 992 && 'py-4 w-full text-center rounded block'}` + (isActive && window_size > 992 ? ' border-red-700' : isActive && window_size <= 992 ? ' bg-red-700 text-zinc-100 border-red-700' : ' text-zinc-400 hover:text-zinc-100 border-zinc-800')}
            onClick={setToggleMenu}
        >
            {label}
        </NavLink>
    );
}