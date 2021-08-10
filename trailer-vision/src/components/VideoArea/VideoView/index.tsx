import { useState } from "react";
import { VideoViewProps } from "../types";
import styles from "./video-view.module.scss";
import Image from "next/dist/client/image";


export default function VideoView({video}: VideoViewProps){

    const [isPlaying, setIsPlaying] = useState(false);

    return(
        <li className={styles.main}>
                
            {/* <iframe 
                src={`https://www.youtube.com/embed/${video.key}`} 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
            >
                <a href={`https://www.youtube.com/embed/${video.key}`}>See On Youtube</a>
            </iframe> */}
            <Image width="320" height="150" src={`https://i.ytimg.com/vi/${video.key}/hq720.jpg`} alt="" />
                
        </li>
    )

}
