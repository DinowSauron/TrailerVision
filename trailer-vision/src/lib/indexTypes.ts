

export type Filme = {
    adult: boolean;
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
    movies: {
        releases: Filmes;
        newMovies: Filmes;
        mostPopular: Filmes;
        genAction: Filmes;
        genSciFi: Filmes;
        genWar: Filmes;
        genDrama: Filmes;
        genCrime: Filmes;
        genAnimation: Filmes;
        genAdventure: Filmes;
        genMistery: Filmes;
        genFamily: Filmes;
        genFantasy: Filmes;
        genWestern: Filmes;
    };
}

export type FilmAreaProps = {
    filme: Filme;
    index: number;
}
export type video = {
    name: string;
    key: string;
    site: string;
}

export type videos = {
    results: [video]
}

export type credits = {
    cast: [
        {
            cast_id: number;
            character: string;
            credit_id: string;
            gender: 1 | 2;
            id: number;
            known_for_department: string;
            name: string;
            order: number;
            original_name: string;
            popularity: number;
            profile_path: string;
        }
    ]
    crew: [
        {
            adult: boolean;
            credit_id: string;
            department: string;
            gender: number;
            id: number;
            job: string;
            known_for_department: string;
            name: string;
            original_name: string;
            popularity: number

        }
    ]
}


export type providerInfo = {
    logo_path: string;
    provider_id: number;
    provider_name: string;}

export type movieProvider = {
    link: string;
    flatrate: [providerInfo];
    buy: [providerInfo];
    rent: [providerInfo];
}

export type FilmeDetails = {
    adult: boolean;
    backdrop_path: string;
    poster_path: string;
    title: string;
    popularity: number;
    id: number;
    homepage: string;
    overview: string;
    release_date: string;
    status: string;
    tagline: string;
    videos: videos;
    credits: credits;
    runtime: number;
    vote_average: number;
    providers: movieProvider;
    recommendations: Filmes;
    genres: [
        {
            id: number;
            name: string;
        }
    ]
    production_companies: [
        {
            id: number;
            logo_path: string;
            name: string;
        }
    ]
}


