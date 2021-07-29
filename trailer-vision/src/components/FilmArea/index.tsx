import styles from "./film-area.module.scss"
import Film from "./Film"
import { FilmAreaProps } from "./types"

export function FilmArea(props: FilmAreaProps){

  
    

    return(
        <div className={styles.main}>
          
          <h2>{props.genre}</h2>
          <hr />
          <section>
            <ul className={styles.filmes}>
              <Film 
                wideBanner="img1.jpg"
                filmName="Falcão e soldado invernal"
              />

            </ul>
          </section>

        </div>
    )
}
