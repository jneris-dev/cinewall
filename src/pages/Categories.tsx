import { useEffect, useState } from "react";

import { tabTitle } from "../util/seo";
import { ListMovies } from "../components/ListMovies";
import { Link, useLocation } from "react-router-dom";

const genreURL = import.meta.env.VITE_GENRE;
const apiKey = import.meta.env.VITE_API_KEY;

interface Categories {
    id: number;
    name: string;
}

interface CurrentCategory {
    name: string;
    with_genres: number | string;
}

export function Categories() {
    tabTitle('Categories');

    const location = useLocation();
    const [categories, setCategories] = useState<Categories[]>([]);
    const [currentCategory, setCurrentCategory] = useState(
        {
            name: location.state != null ? location.state.title : 'Ação',
            with_genres: location.state != null ? location.state.id : 28
        } as CurrentCategory
    );

    const getCategories = async (url: RequestInfo | URL) => {
        const res = await fetch(url);
        const data = await res.json();

        setCategories(data.genres);
    };

    function handleCategory(name: string, id: number) {
        setCurrentCategory({ name: name, with_genres: id })
    }

    useEffect(() => {
        const categoriesURL = `${genreURL}/list?${apiKey}&language=pt-BR`;
        getCategories(categoriesURL);
    }, []);

    useEffect(() => {
        if (location.state != null)
            setCurrentCategory({ name: location.state.title, with_genres: location.state.id } as CurrentCategory)
    }, [location.state]);

    return (
        <div className="flex flex-col">
            <div className="flex flex-row flex-wrap gap-5 mb-16">
                {categories &&
                    categories.map(category => (
                        <Link to={`/category/${category.id}`}
                            key={category.id}
                            id={String(category.id)}
                            className={`category px-4 py-2 rounded bg-zinc-800 hover:bg-zinc-700 cursor-pointer text-sm transition-colors ${category.id == currentCategory.with_genres && 'active'}`}
                            onClick={() => handleCategory(category.name, category.id)}
                            state={{
                                id: category.id,
                                title: category.name
                            }}
                        >
                            {category.name}
                        </Link>
                    ))
                }
            </div>
            {currentCategory.with_genres &&
                <ListMovies
                    title={`Categoria: ${currentCategory.name}`}
                    genres={currentCategory.with_genres}
                />
            }
        </div>
    );
}