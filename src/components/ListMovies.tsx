import { useEffect, useState } from "react";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const searchURL = import.meta.env.VITE_SEARCH;
const discovery = import.meta.env.VITE_DISCOVERY;

import { Card } from "./Card";
import { PlaceholderCard } from "./Placeholder";

interface ListMoviesProps {
    title: string;
    type_list?: string;
    query?: string | null;
    genres?: number | string;
}

export function ListMovies(props: ListMoviesProps) {
    const [topMovies, setTopMovies] = useState([]);
    const [searchMovies, setSearchMovies] = useState([]);
    const [moviesByCategory, setMoviesByCategory] = useState([]);

    const getTopMovies = async (url: RequestInfo | URL) => {
        const res = await fetch(url);
        const data = await res.json();

        setTopMovies(data.results);
    };

    const getSearchedMovies = async (url: RequestInfo | URL) => {
        const res = await fetch(url);
        const data = await res.json();

        setSearchMovies(data.results)
    };

    const getMoviesByCategory = async (url: RequestInfo | URL) => {
        const res = await fetch(url);
        const data = await res.json();

        setMoviesByCategory(data.results)
    };

    useEffect(() => {
        if (props.type_list) {
            const topRatedUrl = `${moviesURL}${props.type_list}?${apiKey}&language=pt-BR&region=BR`;
            getTopMovies(topRatedUrl)
        }
    }, [props.type_list]);

    useEffect(() => {
        if (props.query) {
            const searchWithQueryURL = `${searchURL}?${apiKey}&query=${props.query}&language=pt-BR&region=BR`;
            getSearchedMovies(searchWithQueryURL);
        }
    }, [props.query]);

    useEffect(() => {
        if(props.genres) {
            const currentCategoryURL = `${discovery}?${apiKey}&language=pt-BR&region=BR${props.genres ? '&with_genres=' + props.genres : ''}`;
            getMoviesByCategory(currentCategoryURL);
        }
    }, [props.genres]);

    return (
        <>
            <h1 className="text-2xl mb-5 text-zinc-600 font-semibold">{props.title}</h1>
            <div className="flex flex-row flex-wrap -mx-3 gap-y-7">
                {props.query ?
                    searchMovies.length > 0 && searchMovies.map((movie, key) => <Card key={key} movie={movie} />)
                    : props.type_list ?
                        topMovies.length > 0 && topMovies.map((movie, key) => <Card key={key} movie={movie} />)
                        : props.genres &&
                        moviesByCategory.length > 0 && moviesByCategory.map((movie, key) => <Card key={key} movie={movie} />)
                }
                {searchMovies.length < 1 && props.query ?
                    <div className="mx-3">
                        <p>Não foram encontrados filmes que correspondam aos seus critérios de busca.</p>
                    </div>
                    : topMovies && topMovies.length === 0 && moviesByCategory && moviesByCategory.length === 0 &&
                    <>
                        {[...Array(8)].map((i, k) => {
                            return <PlaceholderCard key={k} />
                        })}
                    </>
                }
            </div>
        </>
    );
}