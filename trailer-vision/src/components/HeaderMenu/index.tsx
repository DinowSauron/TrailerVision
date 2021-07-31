import styles from "./menu.module.scss";
import Image from 'next/image';


export default function HeaderMenu(){

    return(
        <div className={styles.main}>
            <button>
                <div/>
            </button>
            <span className={styles.mainLogo + " img"}>
                <Image
                    layout="fill"
                    src="/icons/main-logo.svg"
                    alt="Trailer Vision Logo"
                />
            </span>

            <a href="https://www.themoviedb.org/">
                <span className={styles.secondLogo + " img"}>
                    <Image
                        layout="fill"
                        src="/icons/blue_short.svg"
                        alt="The Movie Database Logo"
                        title="The Movie Database"
                    />
                </span>
            </a>
        </div>
    )
}
