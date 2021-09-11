import styles from "./menu.module.scss";
import Image from 'next/image';


export default function HeaderMenu(){

    return(
        <div className={styles.main}>
            <div className={styles.headerBar}>
            <button>
                <div/>
            </button>
            <span className={styles.mainLogo + " img"}>
                <Image 
                    blurDataURL="/img/loading-buffering.gif" 
                    placeholder="blur"
                    layout="fill"
                    src="/icons/main-logo.svg"
                    alt="Trailer Vision Logo"
                />
            </span>

            <a href="https://www.themoviedb.org/" target="_blank" rel="noreferrer">
                <span className={styles.secondLogo + " img"}>
                    <Image 
                        blurDataURL="/img/loading-buffering.gif" 
                        placeholder="blur"
                        layout="fill"
                        src="/icons/blue_short.svg"
                        alt="The Movie Database Logo"
                        title="The Movie Database"
                    />
                </span>
            </a>
            </div>
            

        </div>
    )
}
