
export type Filme = {
    adult: boolean;
    backdrop_path: string;
    
}

export type Filmes = {
    page: Number;
    results: Array<Filme>;
    total_pages: Number;
    total_results: Number;
}

export type HomeProps = {
    filmes: {
        releases: Array<Filmes>;
    };
}

