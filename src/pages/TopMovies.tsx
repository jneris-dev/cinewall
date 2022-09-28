import { ListMovies } from "../components/ListMovies";

export function TopMovies() {
    return (
        <ListMovies title="Filmes mais bem avaliados" type_list="top_rated" />
    );
}