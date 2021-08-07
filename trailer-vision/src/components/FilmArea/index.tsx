import styles from "./film-area.module.scss"
import { Filme } from "../../lib/indexTypes"
import Image from 'next/image'
import Film from "./Film"
import { FilmAreaProps } from "./types"
import { useContext, useState } from "react"
import { ViewMovieContext } from "../../contexts/ViewMovieContext"

export default function FilmArea(props: FilmAreaProps){
  const sectionId = props.genre;
  const [needScroll, setNeedScroll] = useState(false);
  const {hasMovieSelected} = useContext(ViewMovieContext);


  function handleScrollSection(direction: "Right" | "Left"){
    const actualScrollPosition = document.getElementById(sectionId)?.scrollLeft || 0;
    const widthRatio = document.getElementById('MainContent')?.getBoundingClientRect().width || 0;
    
    if(direction === "Right") {
      let targetPosition =  (widthRatio / 1.25) + actualScrollPosition;
      document.getElementById(sectionId)?.scroll({top: 0 , left: targetPosition, behavior: 'smooth'});
      

    } else {
      let targetPosition =  Math.abs(widthRatio / 1.25 - actualScrollPosition);
      if(actualScrollPosition < targetPosition) {
        targetPosition = 0;
      }
      document.getElementById(sectionId)?.scroll({top: 0 , left: targetPosition, behavior: 'smooth'});
      
    }
  }

  function verifyScroll(){
    const actualScrollPosition = document.getElementById(sectionId)?.scrollLeft || 0;
    if(actualScrollPosition > 4) {
      (needScroll == false) && setNeedScroll(true);
    }else{
      (needScroll == true) && setNeedScroll(false);
    }
  }


  return(
    <div className={styles.main + " " + (hasMovieSelected ? styles.reduceWidth : "")}>
      
      <h2>{props.genre}</h2>
      <hr />

      <section 
        id={props.genre}
        onScroll={() => verifyScroll()}
      >
        <ul className={styles.filmes}>
          
          {props.filmData.results.map((currentFilme, index) => {
            return (
              <Film filme={currentFilme} key={currentFilme.id} index={index}/>
            )
          })}

          <li className={styles.space}></li>

        </ul>
      </section>
      
      <div 
        className={styles.leftPass + " " + styles.pass}
        style={needScroll ? ({}) : ({display: "none"})}
      >
        <span 
          className="img"
          onClick={() => handleScrollSection("Left")}
        >
          <Image
            layout="fill"
            src="/img/play.png"
            alt="Go To Left"
          />
        </span>
      </div>

      <div className={styles.rightPass + " " + styles.pass}>
        <span 
          className="img"
          onClick={() => handleScrollSection("Right")}
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
