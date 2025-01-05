import { ListMovies } from "../components/ListMovies";
import { tabTitle } from "../util/seo";

export function Home() {
    tabTitle('Home')
    return (
        <ListMovies title="Mais Populares do Momento" type_list="popular" />
    );
}