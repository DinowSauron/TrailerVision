import { FilmAreaProps, Filme } from "../../../lib/indexTypes"

import styles from "./film.module.scss";
import Image from 'next/image';
import { ViewMovieContext } from "../../../contexts/ViewMovieContext";
import { useContext } from "react";

export default function FilmArea(props: FilmAreaProps){

    const photoUrl = "https://image.tmdb.org/t/p/w500";
    const {handleSelectedMovie, hasMovieSelected} = useContext(ViewMovieContext);
    const movie = props.filme;


    if(!movie.poster_path || !movie.backdrop_path){
        return (<> </>);
    }

    if(movie.adult){
        return (<> </>);
    }

    return(
        <li 
            className={styles.filme + " " + (hasMovieSelected ? styles.reduceWidth : "")} 
        >
        <button 
            tabIndex={props.index}
            onClick={() => handleSelectedMovie({movie: movie})}
        >
            <span className={styles.filmPoster + " img"} >
                <Image unoptimized 
                    blurDataURL="/img/loading-buffering.gif" 
                    placeholder="blur"
                    layout="fill"
                    src={photoUrl + movie.poster_path}
                    alt={movie.title}
                />
            </span>
            <h3>{movie.title}</h3>
            <span className={styles.filmBanner + " img"}>
                <Image unoptimized 
                    blurDataURL="/img/loading-buffering.gif" 
                    placeholder="blur"
                    layout="fill"
                    src={photoUrl + movie.backdrop_path}
                    alt={movie.title}
                />

            </span>
        </button>
        </li>
    );
}
