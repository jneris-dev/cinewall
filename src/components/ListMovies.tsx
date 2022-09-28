import { useEffect, useState } from "react";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

import { Card } from "./Card";
import { PlaceholderCard } from "./Placeholder";

interface ListMoviesProps {
    title: string;
    type_list: string;
}

export function ListMovies(props: ListMoviesProps) {
    const [topMovies, setTopMovies] = useState([]);

    const getTopRatedMovies = async (url: RequestInfo | URL) => {
        const res = await fetch(url);
        const data = await res.json();
        setTopMovies(data.results);
    };

    useEffect(() => {
        const topRatedUrl = `${moviesURL}${props.type_list}?${apiKey}&language=pt-BR&region=BR`;
        getTopRatedMovies(topRatedUrl);
    }, []);

    return (
        <>
            <h1 className="text-2xl mb-5 text-zinc-600 font-semibold">{props.title}</h1>
            <div className="flex flex-row flex-wrap -mx-3 gap-y-7">
                {topMovies.length > 0 ? topMovies.map((movie, key) => <Card key={key} movie={movie} />)
                    :
                    <>
                        <PlaceholderCard />
                        <PlaceholderCard />
                        <PlaceholderCard />
                        <PlaceholderCard />
                        <PlaceholderCard />
                        <PlaceholderCard />
                        <PlaceholderCard />
                        <PlaceholderCard />
                    </>
                }
            </div>
        </>
    );
}