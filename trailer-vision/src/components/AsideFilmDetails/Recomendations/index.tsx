
import React from "react"
import FilmArea from "../../FilmArea"
import Film from "../../FilmArea/Film"
import { RecomendationsProps } from "../types"
import styles from "./recomendations.module.scss"


export default function Recomendations({recommendations}: RecomendationsProps) {

    return (
        <div className={styles.main}>
            {/* <FilmArea genre="Filmes Relacionados:" filmData={recommendations}/> */}
            <h3>Filmes Relacionados:</h3>
            <section>
                <ul>
                    {recommendations.results.map((movie, index) => {
                        
                        return <Film filme={movie} index={index}/>
                    })}
                </ul>
            </section>
        </div>
    )
}
