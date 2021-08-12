

import type { NextApiRequest, NextApiResponse } from 'next'
import { movieProvider } from "../../lib/indexTypes";
export default async function handleGetMovieDetais(req: NextApiRequest, res: NextApiResponse){

    if(req.method != "POST"){
        res.json({
            movie: undefined,
            error: "Invalid Method"
        });
        // return;
    }

    const apiKey = process.env.API_KEY;
    const movieId = req.headers.movieid;
    const movieURL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=pt-BR&append_to_response=videos,credits,certification`;
    const providerURL = `https://api.themoviedb.org/3/movie/${movieId}/watch/providers?api_key=${apiKey}&language=pt-BR`;
    
    console.log("Data Detalhada Requisitada")

    const movieData = await fetch(movieURL).then((res) => res.json());
    const providerData = await fetch(providerURL).then((res) => res.json()).then((res) => res.results.BR);
    

    const data = {...movieData, providers: providerData}
    // console.log(data)

    res.json(data);
    
}