import styles from "./film-area.module.scss"
import { Filme } from "../../lib/indexTypes"
import Image from 'next/image'
import Film from "./Film"
import { FilmAreaProps } from "./types"

export default function FilmArea(props: FilmAreaProps){


  function handleScrollSection(SectionId: string,direction: "Dir" | "Esq"){
    const scrollPos = document.getElementById(SectionId)?.scrollLeft || 0;
    const widthRatio = document.getElementById('MainContent')?.getBoundingClientRect().width || 0;
    if(direction === "Dir") {
      const scrollPosition =  widthRatio / 1.25 + scrollPos;
      document.getElementById(SectionId)?.scroll({top: 0 , left: scrollPosition, behavior: 'smooth'});
      console.log('Iniciou', scrollPos, widthRatio, scrollPosition)

    } else {
      const scrollPosition =  widthRatio / 1.25 - scrollPos;
      document.getElementById(SectionId)?.scroll({top: 0 , left: scrollPosition, behavior: 'smooth'});
      console.log('Iniciou', scrollPos, widthRatio, scrollPosition)

    }
  }


  return(
    <div className={styles.main}>
      
      <h2>{props.genre}</h2>
      <hr />
      <div className={styles.rightPass + " " + styles.pass}>
        <span 
          className="img"
          onClick={() => handleScrollSection(props.genre, "Esq")}
        >
          <Image
            layout="fill"
            src="/img/play.png"
            alt="Go To Left"
          />
        </span>
      </div>

      <section id={props.genre}>
        <ul className={styles.filmes}>
          
          {props.filmData.results.map((currentFilme) => {
            return (
              <Film filme={currentFilme} key={currentFilme.id}/>
            )
          })}

        </ul>
      </section>

      <div className={styles.leftPass + " " + styles.pass}>
        <span 
          className="img"
          onClick={() => handleScrollSection(props.genre, "Dir")}
        >
          <Image
            layout="fill"
            src="/img/play.png"
            alt="Go To Left"
          />
        </span>
      </div>

    </div>
  )
}
