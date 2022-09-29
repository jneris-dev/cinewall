import { ListMovies } from "../components/ListMovies";
import { tabTitle } from "../util/seo";

export function Upcoming() {
    tabTitle('Filmes que estreiam em breve')

    return (
        <ListMovies title="Filmes que estreiam em breve" type_list="upcoming" />
    );
}