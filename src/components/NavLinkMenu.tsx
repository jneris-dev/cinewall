import { NavLink, NavLinkProps } from "react-router-dom";

interface NavLinkMenuProps extends NavLinkProps {
    to: string;
    window_size: number;
    setToggleMenu: (value: boolean) => void;
    openMenu: boolean;
    label: string;
}

export function NavLinkMenu({ to, window_size, setToggleMenu, openMenu, label, ...rest }: NavLinkMenuProps) {
    return (
        <NavLink
            to={to}
            {...rest}
            className={({ isActive }) => `transition-colors cursor-pointer p-4 rounded ${isActive ? 'bg-red-600 hover:bg-red-700' : 'hover:bg-zinc-700'}`}
            onClick={() => setToggleMenu(false)}
        >
            {label}
        </NavLink>
    );
}