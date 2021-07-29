import styles from "./film.module.scss"
import { FilmProps } from "../types"

export default function FilmArea(props: FilmProps){

    return(
        <li className={styles.filme}>
        <button>
            <img src={props.wideBanner} alt={props.filmName} />
        </button>
        </li>
    )
}
