

import type { NextApiRequest, NextApiResponse } from 'next'
export default async function handleGetMovieDetais(req: NextApiRequest, res: NextApiResponse){

    if(req.method != "POST"){
        res.json({
            movie: undefined,
            error: "Invalid Method"
        });
        return;
    }

    const apiKey = process.env.API_KEY;
    const movieId = req.headers.movieid;
    const movieURL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=pt-BR&append_to_response=videos,images,providers,credits`;
    
    console.log("Data Detalhada Requisitada")

    const data = await fetch(movieURL).then((res) => res.json());

    res.json(data);
    
}