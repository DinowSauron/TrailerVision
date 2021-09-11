import React, { useState } from "react";
import { VideoViewProps } from "../types";
import styles from "./video-view.module.scss";
import Image from "next/dist/client/image";
import YoutubeIcon from "../YoutubeIcon";
import VideoModal from "../VideoModal";


export default function VideoView({video}: VideoViewProps){

    const [isPlaying, setIsPlaying] = useState(false);
    // console.log(video)


    function handleSetIsPlaying(state: boolean){
        setIsPlaying(state);
    }

    return(
        <li className={styles.main}>

            <div
                className={styles.container}
                onClick={() => handleSetIsPlaying(true)}
            >
                <h4>{video.name}</h4>
                <span className={styles.bannerImg + " img"}>
                    <Image 
                        blurDataURL="/img/loading-buffering.gif" 
                        placeholder="blur" 
                        layout="fill" 
                        src={`https://i.ytimg.com/vi/${video.key}/hqdefault.jpg`} 
                        alt={`Video no YouTube | ${video.name}`}
                    />
                    
                </span>
                <YoutubeIcon/>
            </div>
            
            {isPlaying ? (
            <VideoModal video={video} closeFunction={handleSetIsPlaying}/>
            ) : (<></>)}
            
        </li>
    )

}
