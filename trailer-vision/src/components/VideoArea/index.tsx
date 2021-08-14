
import React from "react";
import { VideoAreaProps } from "./types";
import styles from "./video-area.module.scss";
import VideoView from "./VideoView";
import YoutubeIcon from "./YoutubeIcon";

export default function VideoArea({videos, movieTitle}: VideoAreaProps) {

    return (
        <div className={styles.main}>
            {(videos && videos?.results.length > 0) ? (
                <div>
                    <h3>Trailers:</h3>
                    <section>
                    <ul className={styles.videos}>
                        {videos?.results.map((video) => {
                        return <VideoView video={video} key={video.key}/>
                        })}

                        <li className={styles.lastItem} key="last">
                            <a href={`https://www.youtube.com/results?search_query=${movieTitle}%20Trailer`} target="_blank">
                                <YoutubeIcon/>
                                <p>Pesquisar No YouTube</p>
                            </a>
                            
                        </li>
                        <span className={styles.spaceItem}>

                        </span>
                    </ul>
                    </section>
                </div>
            ) : (
            <div className={styles.noTrailer}>
                <a href={`https://www.youtube.com/results?search_query=${movieTitle}%20Trailer`} target="_blank">
                    <svg height="100%" version="1.1" viewBox="0 0 68 48" width="100%"><path d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#f00"></path><path d="M 45,24 27,14 27,34" fill="#fff"></path></svg>
                    <p>Pesquisar Trailer No YouTube</p>
                </a>
            </div>)}
          </div>
    );
}