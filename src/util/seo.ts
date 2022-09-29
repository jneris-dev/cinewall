export function tabTitle(title: string) {
    if (title)
        document.title = title + ' - Cinewall'
    else
        document.title = 'Cinewall - Catalogo de Filmes'
}