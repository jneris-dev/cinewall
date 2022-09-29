import { useSearchParams } from "react-router-dom";

import { ListMovies } from "../components/ListMovies";
import { tabTitle } from "../util/seo";

export function Search() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("q");

    tabTitle(`Resultados para: ${query}`)

    return (
        <ListMovies title={`Resultados para: ${query}`} type_list="popular" query={query} />
    );
}