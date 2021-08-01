import { Filme } from "../../../lib/indexTypes"

import styles from "./film.module.scss";
import Image from 'next/image';

export default function FilmArea(props: Filme){

    const photoUrl = "https://image.tmdb.org/t/p/w500"

    return(
        <li className={styles.filme}>
        <button>
            <span className={styles.filmBanner + " img"}>
                <Image
                    layout="fill"
                    src={photoUrl + props.backdrop_path}
                    alt={props.title}
                />

            </span>
        </button>
        </li>
    )
}
