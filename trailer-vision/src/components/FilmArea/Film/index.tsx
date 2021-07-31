import styles from "./film.module.scss";
import Image from 'next/image';
import { FilmProps } from "../types";

export default function FilmArea(props: FilmProps){

    return(
        <li className={styles.filme}>
        <button>
            <span className={styles.filmBanner + " img"}>
                <Image
                    layout="fill"
                    src={props.wideBanner}
                    alt={props.filmName}
                />
            </span>
        </button>
        </li>
    )
}
