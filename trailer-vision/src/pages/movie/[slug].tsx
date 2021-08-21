
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import React from "react";
import HeaderMenu from "../../components/HeaderMenu";
import { getImportantPaths } from "../../lib/getIndexData"
import { MovieProps, Params } from "../../lib/movieTypes";
import style from "../../styles/movie.module.scss" 

// 497698

export default function Movie({movie}: MovieProps){
    const photoOriginalUrl = "https://image.tmdb.org/t/p/original";


    return (
        <div 
            className={style.mainContent}
            style={{backgroundImage: 'url(' + photoOriginalUrl + movie.backdrop_path + ')'}}
        >

            <Head>
                <title>Trailer Vision | {movie.title}</title>
            </Head>
            <div className={style.mainContainer}>
                
                <HeaderMenu/>
                <h1>{movie.title}</h1>
            </div>
        </div>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    // para pre-renderizar as rotas mais impoortantes

    const data = await getImportantPaths();

    const paths = data.results.map(movie => {
        return {
            params: {
                slug: movie.id.toString()
            }
        }
    });

    return {
        paths,
        fallback: "blocking"
    }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    const slug  = params?.slug || "";

    const data = await fetch("http://localhost:3000/api/getMovieDetails", {
        method: "POST",
        headers: {
            MovieId: (slug.toString())
        }
    }).then((res) => res.json());

    return {
        props: {
            movie: data
        },
        revalidate: 3600 * 24
    }


}