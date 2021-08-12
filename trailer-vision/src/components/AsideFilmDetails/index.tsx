
import Image from "next/image";
import React, { useContext } from "react";
import { ViewMovieContext } from "../../contexts/ViewMovieContext";
import ProviderArea from "./ProviderArea";
import VideoArea from "../VideoArea";
import styles from "./aside-details.module.scss";


export default function AsideDetails() {
    const {hasMovieSelected, selectedMovie} = useContext(ViewMovieContext);
    const photoHalfUrl = "https://image.tmdb.org/t/p/w500";

    
    function getMovieTimeString(time: number){
        const hours = Math.floor(time / 60);
        const minutes = time - 60 * hours

        return `${hours}h ${minutes}min`
    }

    function getBackgroundVoteColor(vote: number) {
        if(vote > 9) {
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

    return (
        <aside className={styles.filmInfo + " " + (hasMovieSelected ? styles.selected : "")}>
            <span className={styles.posterImg + " img"}>
              <span className={styles.leftBarrier}></span>
              <span className={styles.downBarrier}></span>
              <Image
                priority={true}
                layout="fill"
                src={photoHalfUrl + selectedMovie.backdrop_path}
              />
            </span>
            
            
            {console.log(selectedMovie)}
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



                <ul className={styles.genres}>
                  <div>
                      {selectedMovie.genres.map((genre) => {
                        return <li key={genre.id}>{genre.name}</li>
                      })}
                  </div>
                  <p>{selectedMovie.status}</p>
                </ul>
                

                <hr />

                <VideoArea videos={selectedMovie.videos} movieTitle={selectedMovie.title}/>
                
                {console.log(selectedMovie)}
                {(selectedMovie.providers) ?  (
                    <ProviderArea providers={selectedMovie.providers}/>
                ) : (<></>)}
                {/*  */}

                  
                
              </section>
            ) : (<></>)}
          </aside>
    );
}