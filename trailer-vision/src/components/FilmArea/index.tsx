import styles from "./film-area.module.scss"
import { Filme } from "../../lib/indexTypes"
import Image from 'next/image'
import Film from "./Film"
import { FilmAreaProps } from "./types"
import { useState } from "react"

export default function FilmArea(props: FilmAreaProps){
  const sectionId = props.genre;
  const [needScroll, setNeedScroll] = useState(false);


  function handleScrollSection(direction: "Right" | "Left"){
    const ActualPosition = document.getElementById(sectionId)?.scrollLeft || 0;
    const widthRatio = document.getElementById('MainContent')?.getBoundingClientRect().width || 0;
    
    if(direction === "Right") {
      let targetPosition =  (widthRatio / 1.25) + ActualPosition;
      document.getElementById(sectionId)?.scroll({top: 0 , left: targetPosition, behavior: 'smooth'});
      console.log('Iniciou', ActualPosition, widthRatio, targetPosition)

    } else {
      let targetPosition =  Math.abs(widthRatio / 1.25 - ActualPosition);
      if(ActualPosition < targetPosition) {
        targetPosition = 0;
      }
      document.getElementById(sectionId)?.scroll({top: 0 , left: targetPosition, behavior: 'smooth'});
      console.log('Iniciou', ActualPosition, widthRatio, targetPosition)
    }
  }

  function verifyScroll(){
    const ActualPosition = document.getElementById(sectionId)?.scrollLeft || 0;
    if(ActualPosition > 4){
      setNeedScroll(true);
    }else{
      setNeedScroll(false);
    }
  }


  return(
    <div className={styles.main}>
      
      <h2>{props.genre}</h2>
      <hr />

      <section id={props.genre}
        onScroll={() => verifyScroll()}
      >
        <ul className={styles.filmes}>
          
          {props.filmData.results.map((currentFilme) => {
            return (
              <Film filme={currentFilme} key={currentFilme.id}/>
            )
          })}

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
