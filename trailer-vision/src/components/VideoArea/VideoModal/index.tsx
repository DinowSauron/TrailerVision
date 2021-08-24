
import { VideoModalProps } from "../types"
import styles from "./video-modal.module.scss"

export default function VideoModal({video, closeFunction}: VideoModalProps) {

    console.log(video.key)
    return (
        <div className={styles.main}>
            <button 
                className={styles.closeModal}
                onClick={() => closeFunction(false)}
            />
            <div className={styles.videoWapper}>
                <h2>{video.name}</h2>
                <iframe
                    src={`https://www.youtube.com/embed/${video.key}`}
                    title="Reprodutor de vídeos do YouTube"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                >
                    <a href={`https://www.youtube.com/watch?v=${video.key}`} target="_blank" rel="noreferrer">See On Youtube</a>
                </iframe>
            </div>

        </div>
    )
}