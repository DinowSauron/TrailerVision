
export type Filme = {
    // adult: boolean;
    backdrop_path: string;
    title: string;
    popularity: number;
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

