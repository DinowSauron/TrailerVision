import styles from "./film-area.module.scss"
import { Filme } from "../../lib/indexTypes"
import Image from 'next/image'
import Film from "./Film"
import { FilmAreaProps } from "./types"

export default function FilmArea(props: FilmAreaProps){


    return(
        <div className={styles.main}>
          
          <h2>{props.genre}</h2>
          <hr />
          <section>
            <ul className={styles.filmes}>
              
              {props.filmData.results.map((filme) => {
                return (
                  <Film 
                    backdrop_path={filme.backdrop_path}
                    title={filme.title}
                    popularity={filme.popularity}
                  />
                )
              })}

            </ul>
          </section>

        </div>
    )
}
