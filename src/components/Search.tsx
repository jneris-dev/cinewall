import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

interface SearchProps {
    toggleMenu(value: boolean): void;
    stateMenu: boolean;
}

export function Search({ toggleMenu, stateMenu }: SearchProps) {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    function handleSubmit(event: FormEvent) {
        event.preventDefault();

        if (!search) return;

        navigate(`/results?s=${search}`);
        toggleMenu(false);
    };
    return (
        <form className="flex-1 notebook:max-w-md tablet:max-w-[300px] max-w-[600px] tablet:order-2 order-1 w-full" onSubmit={handleSubmit}>
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
                    className="block p-4 w-full text-sm text-zinc-100 bg-zinc-700 rounded-md border border-zinc-700 outline-none focus:border-red-500"
                />
                <button
                    type="submit"
                    className="text-white absolute right-2.5 bottom-2.5 bg-red-600 hover:bg-red-700 font-medium rounded text-sm px-4 py-2"
                >
                    Buscar
                </button>
            </div>
        </form>
    );
}