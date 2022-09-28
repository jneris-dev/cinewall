import { ListMovies } from "../components/ListMovies";

export function NowPlaying() {
    return (
        <ListMovies title="Filmes em Cartaz" type_list="now_playing" />
    );
}