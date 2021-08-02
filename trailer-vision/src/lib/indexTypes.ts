
export type Filme = {
    // adult: boolean;
    backdrop_path: string;
    poster_path: string;
    title: string;
    popularity: number;
    id: number;
}

export type Filmes = {
    page: Number;
    results: Array<Filme>;
    total_pages: Number;
    total_results: Number;
}

export type HomeProps = {
    filmes: {
        releases: Filmes;
    };
}

export type FilmAreaProps = {
    filme: Filme;
}

