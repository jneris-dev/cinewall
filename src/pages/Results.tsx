import { useLocation } from "react-router-dom";

import { ListMovies } from "../components/ListMovies";
import { tabTitle } from "../util/seo";

export function Results() {
    const { search } = useLocation();
    const query = new URLSearchParams(search).get("s");

    tabTitle(`Resultados para: ${query}`)

    return (
        <ListMovies title={`Resultados para: ${query}`} type_list="popular" query={query} />
    );
}