import { ListMovies } from "../components/ListMovies";
import { tabTitle } from "../util/seo";

export function NowPlaying() {
    tabTitle('Filmes em Cartaz')
    return (
        <ListMovies title="Filmes em Cartaz" type_list="now_playing" />
    );
}