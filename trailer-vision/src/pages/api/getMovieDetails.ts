

import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handleGetMovieDetais(req: NextApiRequest, res: NextApiResponse){

    async function getData (movieURL: string, providerURL: string) {
        
        const movieData = await fetch(movieURL).then((res) => res.json());

        const providerFetch = await fetch(providerURL).then((res) => res.json());
        const providerData = providerFetch.results && providerFetch.results.BR ? providerFetch.results.BR : [];
    
        return {
            ...movieData,
            providers: providerData
        }
    }


    if(req.method != "POST"){
        res.json({
            movie: undefined,
            error: "Invalid Method"
        });
        return;
    }

    const apiKey = process.env.API_KEY;
    const movieId = req.headers.movieid;
    const movieURL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=pt-BR&append_to_response=videos,credits,certification,recommendations,providers`;
    const providerURL = `https://api.themoviedb.org/3/movie/${movieId}/watch/providers?api_key=${apiKey}&language=pt-BR`;
    
    res.json(await getData(movieURL, providerURL));
    
}