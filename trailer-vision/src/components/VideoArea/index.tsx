
import React from "react";
import { VideoAreaProps } from "./types";
import styles from "./video-area.module.scss";
import VideoView from "./VideoView";

export default function VideoArea({videos}: VideoAreaProps) {

    return (
        <div className={styles.main}>
            {videos ? (
                <section>
                <ul className={styles.videos}>
                    {videos.results.map((video) => {
                    return <VideoView video={video}/>
                    })}
                </ul>
                </section>
            ) : (<></>)}
          </div>
    );
}