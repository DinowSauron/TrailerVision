import Image from "next/image";
import { CastAreaProps } from "../types"
import styles from "./cast-area.module.scss"

export default function CastArea(props: CastAreaProps){
    const photoHalfUrl = "https://image.tmdb.org/t/p/w200";

    const casts = props.credits.cast.map((cast, index) => {
        if (index >= 28) {
            return undefined;
        }
        if (cast.profile_path != null) {
            return cast;
        }
    })
    .filter(cast => {
        return cast !== undefined;
    });




    return (
        <div className={styles.castContainer}>
            <h3>Elenco:</h3>

            <section>
                <ul>
                    {casts.map((cast, index) => {
                        return (
                        cast ? (
                        <li 
                            key={index.toString()}
                            title={`${cast.name}  |  ${cast.character}`}
                        >
                            <span className={styles.castImg + " img"}>
                                <a href="#">
                                <Image unoptimized 
                                    blurDataURL="/img/loading-buffering.gif" 
                                    placeholder="blur"
                                    layout="fill"
                                    src={photoHalfUrl + cast.profile_path}
                                    alt={`${cast.known_for_department}: ${cast.original_name}`}
                                />
                                <h4>{cast.name} &nbsp;&nbsp;</h4>
                                <h5>{cast.character}</h5>
                                </a>
                            </span>
                        </li>) : (<></>)
                        );
                    })}
                </ul>
            </section>
        </div>
    )
}