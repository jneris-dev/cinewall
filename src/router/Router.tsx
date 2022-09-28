import { Navigate, Route, Routes, } from "react-router-dom";

import ScrollToTop from "./ScrollToTop";

import { Home } from "../pages/Home";
import { Movie } from "../pages/Movie";
import { TopMovies } from "../pages/TopMovies";
import { Upcoming } from "../pages/Upcoming";
import { NowPlaying } from "../pages/NowPlaying";

export function Router() {
    return (
        <ScrollToTop>
            <Routes>
                <Route path="*" element={<Navigate replace to="/" />} />

                <Route path="/" element={<Home />} />
                <Route path="/top-rated" element={<TopMovies />} />
                <Route path="/upcoming" element={<Upcoming />} />
                <Route path="/now-playing" element={<NowPlaying />} />
                <Route path="/movie/:id" element={<Movie />} />
            </Routes>
        </ScrollToTop>
    );
}