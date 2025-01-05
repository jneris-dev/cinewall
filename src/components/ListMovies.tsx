import { useEffect, useState } from "react";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const searchURL = import.meta.env.VITE_SEARCH;
const discovery = import.meta.env.VITE_DISCOVERY;

import { Card, MovieProps } from "./Card";
import { PlaceholderCard } from "./Placeholder";

interface ListMoviesProps {
    title: string;
    type_list?: string;
    query?: string | null;
    genres?: number | string;
}

interface ResponseProps {
    dates?: Array<any>;
    page: number;
    results: Array<MovieProps>;
    total_pages: number;
    total_results: number;
}

export function ListMovies(props: ListMoviesProps) {
    const [topMovies, setTopMovies] = useState({} as ResponseProps);
    const [searchMovies, setSearchMovies] = useState({} as ResponseProps);
    const [moviesByCategory, setMoviesByCategory] = useState(
        {} as ResponseProps
    );
    const [paginated, setPaginated] = useState<number>(1);

    const getTopMovies = async (url: RequestInfo | URL) => {
        const res = await fetch(url);
        const data = await res.json();

        if (data.success && data.success == false)
            setTopMovies({} as ResponseProps);
        else setTopMovies(data);
    };

    const getSearchedMovies = async (url: RequestInfo | URL) => {
        const res = await fetch(url);
        const data = await res.json();

        if (data.success && data.success == false)
            setSearchMovies({} as ResponseProps);
        else setSearchMovies(data);
    };

    const getMoviesByCategory = async (url: RequestInfo | URL) => {
        const res = await fetch(url);
        const data = await res.json();

        if (data.success && data.success == false)
            setMoviesByCategory({} as ResponseProps);
        else setMoviesByCategory(data);
    };

    useEffect(() => {
        if (props.type_list) {
            const topRatedUrl = `${moviesURL}${props.type_list}?${apiKey}&language=pt-BR&region=BR&page=${paginated}`;
            getTopMovies(topRatedUrl);
        }
    }, [props.type_list, paginated]);

    useEffect(() => {
        if (props.query) {
            const searchWithQueryURL = `${searchURL}?${apiKey}&query=${props.query}&language=pt-BR&region=BR`;
            getSearchedMovies(searchWithQueryURL);
        }
    }, [props.query]);

    useEffect(() => {
        if (props.genres) {
            const currentCategoryURL = `${discovery}?${apiKey}&language=pt-BR&region=BR${
                props.genres ? "&with_genres=" + props.genres : ""
            }`;
            getMoviesByCategory(currentCategoryURL);
        }
    }, [props.genres]);

    return (
        <>
            <h1 className="text-2xl mb-5 text-zinc-600 font-semibold">
                {props.title}
            </h1>
            <div className="flex flex-row flex-wrap -mx-3 gap-y-7">
                {props.query
                    ? searchMovies.results.length > 0 &&
                      searchMovies.results.map((item, key) => (
                          <Card key={key} movie={item} />
                      ))
                    : props.type_list
                    ? topMovies.results &&
                      topMovies.results.length > 0 &&
                      topMovies.results.map((item, key) => (
                          <Card key={key} movie={item} />
                      ))
                    : props.genres &&
                      moviesByCategory.results.length > 0 &&
                      moviesByCategory.results.map((item, key) => (
                          <Card key={key} movie={item} />
                      ))}
                {Object.keys(searchMovies).length > 0 &&
                searchMovies.results.length < 1 &&
                props.query ? (
                    <div className="mx-3">
                        <p>
                            Não foram encontrados filmes que correspondam aos
                            seus critérios de busca.
                        </p>
                    </div>
                ) : (
                    topMovies.results &&
                    topMovies.results.length === 0 &&
                    moviesByCategory.results &&
                    moviesByCategory.results.length === 0 && (
                        <>
                            {[...Array(8)].map((i, k) => {
                                return <PlaceholderCard key={k} />;
                            })}
                        </>
                    )
                )}
            </div>
        </>
    );
}
