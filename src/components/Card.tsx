import { Star } from "phosphor-react";
import { Link } from "react-router-dom";

const imagesURL = import.meta.env.VITE_IMG;

export interface MovieProps {
    adult: boolean;
    id: number;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    backdrop_path: string;
    release_date: string;
    title: string;
    vote_average: number;
    vote_count: number;
    genres: {
        id: number;
        name: string;
    };
    production_companies: {
        id: number;
        logo_path: string;
        name: string;
    }
    genre_ids?: Array<number>,    
    original_language?: string,
    video?: false
}

interface Props {
    movie: MovieProps
}

export function Card({ movie }: Props) {
    return (
        <>
            <div className="desktop:w-1/4 notebook:w-1/3 mobile:w-1/2 w-full px-3">
                <div className="p-4 bg-zinc-800 rounded-lg flex-1 h-full flex flex-col">
                    <img
                        src={movie.poster_path ? imagesURL + 'w780' + movie.poster_path : `https://placehold.co/780x1170/18181b/FFF?text=${encodeURIComponent(movie.title)}`}
                        alt={movie.title}
                        title={movie.title}
                        className="max-w-full h-auto rounded-lg"
                    />
                    <div className="p-4 flex-auto">
                        <p className="text-xl font-semibold mb-1 truncate">
                            {movie.title}
                        </p>
                        <p className="text-sm font-semibold mb-4 truncate text-zinc-500">
                            {movie.original_title}
                        </p>
                        <span className="flex flex-row gap-2 items-center mb-2 text-lg">
                            <Star size={20} weight="fill" className="text-yellow-500" />
                            {movie.vote_average > 0 ? +(movie.vote_average).toFixed(1) : 'ND'}
                        </span>
                    </div>
                    <Link to={`/movie/${movie.id}`}>
                        <button className="bg-red-600 w-full h-12 rounded-md hover:bg-red-700 text-zinc-100 transition-colors">
                            Mais detalhes
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
}