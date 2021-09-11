
import Image from "next/image";
import React, { useContext, useEffect } from "react";
import { ViewMovieContext } from "../../contexts/ViewMovieContext";
import ProviderArea from "./ProviderArea";
import VideoArea from "../VideoArea";
import styles from "./aside-details.module.scss";
import CastArea from "./CastArea";
import Recomendations from "./Recomendations";


export default function AsideDetails() {
    const {hasMovieSelected, selectedMovie} = useContext(ViewMovieContext);
    const photoOriginalUrl = "https://image.tmdb.org/t/p/original";
    
    const releaseDate = getReleasedDate();

    function getReleasedDate() {
      if(!selectedMovie.release_date){
        return "";
      }
      const dateSplit = selectedMovie.release_date.split("-");
      const date = dateSplit.reverse().join('/');
      return date;
    }

    function getMovieTimeString(time: number){
        const hours = Math.floor(time / 60);
        const minutes = time - 60 * hours;
        
        if(minutes === 0) {
            if(hours === 0) {
              return "";
            }

            return `${hours}h`;
        }

        return `${hours}h ${minutes}min`;
    }

    function getBackgroundVoteColor(vote: number) {
        if(vote > 8.5) {
        return "#00ee00"
        } 
        else if(vote > 7) {
        return "#018001"
        } 
        else if(vote > 5) {
        return "#5e8001"
        } 
        else if(vote > 3) {
        return "#804301"
        } 
        else {
        return "#800101"
        }
    }

    
    useEffect(() => {
      const sections = document.getElementById("asideArea")?.getElementsByTagName("section") || [];
      for(var i = 0; i < sections.length; i++) {
        sections[i].scroll({top: 0 , left: 0, behavior: 'smooth'});
      }
      const widthRatio = document.getElementById('MainContent')?.getBoundingClientRect().width || 0;
      if (widthRatio < 1080) {
        document.getElementById("MainContent")?.scroll({top: 0, behavior: "smooth"});
      }

    }, [selectedMovie]);

    return (
        <aside className={styles.filmInfo + " " + (hasMovieSelected ? styles.selected : "")} id="asideArea">
            <span className={styles.posterImg + " img"}>
              <span className={styles.leftBarrier}></span>
              <span className={styles.downBarrier}></span>
              <Image 
                blurDataURL="/img/loading-buffering.gif" 
                placeholder="blur"
                priority={true}
                layout="fill"
                src={photoOriginalUrl + selectedMovie.backdrop_path}
                alt={`${selectedMovie.title} - Banner`}
              />
            </span>
            
            <div className={styles.pass}/>
            
            
            {hasMovieSelected ? (
              <section className={styles.mainSection}>

                {selectedMovie.vote_average > 0 ? (
                <span 
                  className={styles.vote}
                  title="Media dos Votos"
                  style={{backgroundColor: getBackgroundVoteColor(selectedMovie.vote_average)}}
                >
                  {selectedMovie.vote_average}
                </span>
                ) : (<></>)}


                <p className={styles.movieId}>
                  {selectedMovie.release_date.split("-")[0]}
                  <span className={styles.dot}></span>
                  {getMovieTimeString(selectedMovie.runtime)}
                </p>


                <h1>{selectedMovie.title}</h1>
                <p className={styles.tagline}>{selectedMovie.tagline}</p>

                <h2>Sinopse</h2>
                <p className={styles.overview}>{selectedMovie.overview}</p>



                <div className={styles.genres}>
                  <ul>
                      {selectedMovie.genres.map((genre) => {
                        return <li key={genre.id}>{genre.name}</li>
                      })}
                  </ul>
                  <p
                    title={selectedMovie.release_date}
                  >
                  {selectedMovie.status} 
                  <span className={styles.dot}></span>
                  {releaseDate}</p>
                </div>
                

                <hr />

                <VideoArea videos={selectedMovie.videos} movieTitle={selectedMovie.title}/>
                
                {(selectedMovie.providers) ?  (
                    <ProviderArea providers={selectedMovie.providers}/>
                ) : (<></>)}
                <br/>
                
                <CastArea credits={selectedMovie.credits}/>

                <Recomendations recommendations={selectedMovie.recommendations}/>
                {/*  */}

                
                
              </section>
            ) : (<></>)}
          </aside>
    );
}