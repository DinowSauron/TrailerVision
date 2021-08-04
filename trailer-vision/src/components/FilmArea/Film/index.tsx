import { FilmAreaProps, Filme } from "../../../lib/indexTypes"

import styles from "./film.module.scss";
import Image from 'next/image';

export default function FilmArea(props: FilmAreaProps){

    const photoUrl = "https://image.tmdb.org/t/p/w500";
    const filme = props.filme;

    return(
        <li 
            className={styles.filme} 
        >
        <button>
            <span className={styles.filmPoster + " img"}>
                <Image
                    layout="fill"
                    src={photoUrl +""+ filme.poster_path}
                    alt={filme.title}
                />
            </span>
            <h3>{filme.title}</h3>
            <span className={styles.filmBanner + " img"}>
                <Image
                    layout="fill"
                    src={photoUrl + filme.backdrop_path}
                    alt={filme.title}
                />

            </span>
        </button>
        </li>
    )
}
