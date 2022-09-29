import { ListMovies } from "../components/ListMovies";
import { tabTitle } from "../util/seo";

export function TopMovies() {
    tabTitle('Filmes mais bem avaliados')

    return (
        <ListMovies title="Filmes mais bem avaliados" type_list="top_rated" />
    );
}