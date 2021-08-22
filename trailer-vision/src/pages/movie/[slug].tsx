
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { seoImageProps } from "../../components/Seo/Seo";
import React from "react";
import AsideDetails from "../../components/AsideFilmDetails";
import HeaderMenu from "../../components/HeaderMenu";
import { Seo } from "../../components/Seo/Seo";
import { getImportantPaths } from "../../lib/getIndexData"
import { MovieProps } from "../../lib/movieTypes";
import style from "../../styles/movie.module.scss" 



export default function Movie({movie}: MovieProps){
    const photoOriginalUrl = "https://image.tmdb.org/t/p/original";
    const imgUrl = photoOriginalUrl + movie.backdrop_path;

    const image: seoImageProps = {
        rawUrl: movie.backdrop_path,
        type: 'image/jpeg',
        width: '1366',
        height: '768',
        alt: movie.title + " - Banner",
    }
    

    return (
        <div 
            className={style.mainContent}
            style={{backgroundImage: `url(${imgUrl})`}}
        >

            <Seo 
                siteTitle={`Trailer Vision | ${movie.title}`}
                image={image}
                description={movie.overview}
            />

            <div className={style.mainContainer}>
                
                <HeaderMenu/>
                
                
                <AsideDetails /> 

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

    const data = await fetch(process.env.ABSOLUTE_URL + "/api/getMovieDetails", {
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