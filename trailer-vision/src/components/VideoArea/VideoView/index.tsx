import { VideoViewProps } from "../types";
import styles from "./video-view.module.scss";


export default function VideoView(props: VideoViewProps){

    return(
        <li className={styles.main}>
            <iframe src="https://www.youtube.com/embed/uNAxHLp7wv8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            {/* {props.video.key} */}
        </li>
    )

}
