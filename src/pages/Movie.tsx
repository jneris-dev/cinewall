import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { PlaceholderMovie } from "../components/Placeholder";
import { tabTitle } from "../util/seo";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const imagesURL = import.meta.env.VITE_IMG;

export interface MovieProps {
    adult: boolean;
    id: number;
    original_title: string;
    budget: number;
    revenue: number;
    overview: string;
    popularity: number;
    poster_path: string;
    backdrop_path: string;
    release_date: string;
    title: string;
    vote_average: number;
    vote_count: number;
    runtime: string;
    production_countries: [{
        iso_3166_1: string;
        name: string;
    }];
    genres: [{
        id: number;
        name: string;
    }];
    production_companies: [{
        id: number;
        logo_path: string;
        name: string;
        origin_country: string;
    }]
}

const color = {
    bad: '#d92360',
    regular: '#d2d347',
    good: '#2dcf7f',
    dark_bad: '#561534',
    dark_regular: '#423c14',
    dark_good: '#21442b',
    nd: '#666666',
}

export function Movie() {
    const { id } = useParams();
    let navigate = useNavigate()

    const [movie, setMovie] = useState<MovieProps>();
    const formatPtBr = new Intl.NumberFormat('pt-BR', { maximumSignificantDigits: 3 });

    if (movie?.title) { tabTitle(movie.title) }

    const getMovie = async (url: RequestInfo | URL) => {
        const res = await fetch(url);
        const data = await res.json();
        setMovie(data);
    };

    function formatCurrency(value: number) {
        return value.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
        });
    };

    useEffect(() => {
        const movieUrl = `${moviesURL}${id}?${apiKey}&language=pt-BR&region=BR`;

        getMovie(movieUrl);
    }, []);

    return (
        <section className="pt-24">
            {movie ?
                (
                    <>
                        <div className={`movie-bg`} style={{ backgroundImage: `url(${movie.backdrop_path ? imagesURL + 'original' + movie.backdrop_path : `https://placehold.co/3840x2160/3f3f46/FFF?text=${encodeURIComponent(movie.title)}`})` }} />
                        <div className="w-full flex notebook:flex-row flex-col gap-16 mb-20">
                            <div className="notebook:w-1/3 w-full mx-auto">
                                <img
                                    src={movie.poster_path ? imagesURL + 'w780' + movie.poster_path : `https://placehold.co/780x1170/e5e5e5/18181b?text=${encodeURIComponent(movie.title)}`}
                                    className="max-w-[420px] w-full mx-auto h-auto rounded-lg"
                                    alt={movie.title}
                                    title={movie.title}
                                />
                                <div className="mt-5 flex flex-row gap-5 items-center justify-center">
                                    <div className="w-24 h-24">
                                        <CircularProgressbar
                                            value={movie?.vote_average}
                                            maxValue={10}
                                            text={movie.vote_average != 0 ? movie?.vote_average.toFixed(1) : 'ND'}
                                            styles={buildStyles({
                                                textSize: '30px',
                                                pathTransitionDuration: 0.5,
                                                pathColor: `${movie?.vote_average <= 4.9 ? color.bad :
                                                    movie?.vote_average <= 6.9 ? color.regular :
                                                        color.good}`,
                                                textColor: '#f4f4f5',
                                                trailColor: `${movie?.vote_average === 0 ? color.nd :
                                                    movie?.vote_average <= 4.9 ? color.dark_bad :
                                                        movie?.vote_average <= 6.9 ? color.dark_regular :
                                                            color.dark_good}`,
                                            })}
                                        />
                                    </div>
                                    <div>
                                        <p className="text-xl mb-2">
                                            {formatPtBr.format(movie.vote_count)} <span className="text-base text-zinc-500">votos</span>
                                        </p>
                                        <p className="text-xl">
                                            {movie.popularity} <span className="text-base text-zinc-500">popularidade</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="notebook:w-2/3 w-full notebook:pt-10 pt-5 notebook:max-w-2xl">
                                <button
                                    className="mb-2"
                                    onClick={() => navigate(-1)}
                                >
                                    &#x21B6; Voltar
                                </button>
                                <h1 className="text-3xl font-semibold mb-1">
                                    {movie.title}
                                </h1>
                                <p className="text-lg text-zinc-500 mb-5">
                                    {movie.original_title}
                                </p>
                                <p className="mb-10 text-zinc-300">
                                    {movie.overview}
                                </p>
                                <h2 className="text-2xl font-semibold mb-3">
                                    Detalhes
                                </h2>
                                <div className="w-full flex flex-col divide-y-2 divide-zinc-800">
                                    <div className="flex flex-row justify-between items-center py-4">
                                        <span className="text-zinc-400">
                                            Gênero
                                        </span>
                                        <ul className="flex flex-row flex-wrap gap-3 max-w-[50%] justify-end">
                                            {movie.genres.map((genre, key) => (
                                                <Link
                                                    className="rounded-md py-2 px-3 text-xs bg-zinc-800 hover:ring-1 hover:ring-zinc-800 hover:ring-offset-1 hover:ring-offset-zinc-900" key={key} id={String(genre.id)}
                                                    to={`/category/${genre.id}`}
                                                    state={{
                                                        id: genre.id,
                                                        title: genre.name
                                                    }}
                                                >
                                                    {genre.name}
                                                </Link>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="flex flex-row justify-between items-center py-4">
                                        <span className="text-zinc-400">
                                            Lançamento
                                        </span>
                                        <span>
                                            {new Date(movie.release_date).toLocaleDateString('pt-BR')}
                                        </span>
                                    </div>
                                    <div className="flex flex-row justify-between items-center py-4">
                                        <span className="text-zinc-400">
                                            Origem
                                        </span>
                                        <span>
                                            {movie.production_countries.length > 0 ? movie.production_countries[0].name : "???"} | {movie.production_countries.length > 0 ? movie.production_countries[0].iso_3166_1 : "???"}
                                        </span>
                                    </div>
                                    <div className="flex flex-row justify-between items-center py-4">
                                        <span className="text-zinc-400">
                                            Orçamento
                                        </span>
                                        <span>
                                            {movie.budget != 0 ? formatCurrency(movie.budget) : '-'}
                                        </span>
                                    </div>
                                    <div className="flex flex-row justify-between items-center py-4">
                                        <span className="text-zinc-400">
                                            Receita
                                        </span>
                                        <span className={`${movie.revenue > movie.budget && movie.budget != 0 ? 'text-green-500' :
                                            movie.revenue < movie.budget && movie.budget != 0 && 'text-red-500'
                                            }`}>
                                            {movie.revenue != 0 ? formatCurrency(movie.revenue) : '-'}
                                        </span>
                                    </div>
                                    <div className="flex flex-row justify-between items-center py-4">
                                        <span className="text-zinc-400">
                                            Duração
                                        </span>
                                        <span>
                                            {movie.runtime} min
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
                :
                (
                    <PlaceholderMovie />
                )
            }
        </section>
    );
}