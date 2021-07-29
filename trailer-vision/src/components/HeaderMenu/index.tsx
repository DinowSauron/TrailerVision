import styles from "./menu.module.scss"


export function HeaderMenu(){

    return(
        <div className={styles.main}>
            <button>
                <div/>
            </button>
            <img 
                className={styles.mainLogo}
                src="/icons/main-logo.svg" 
                alt="Trailer Vision Logo" 
            />

            <a href="https://www.themoviedb.org/">
                <img
                    className={styles.secondLogo}
                    src="/icons/blue_short.svg"
                    alt="The Movie Database Logo"
                    title="The Movie Database"
                />
            </a>
        </div>
    )
}
