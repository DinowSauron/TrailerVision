import styles from "./footer.module.scss"


export default function FooterInfo(){
    

    return(
        <footer className={styles.main}>
            <ul>
              <li>
                <a href="https://github.com/DinowSauron/TrailerVision/blob/main/LICENSE" target="_blank" rel="noreferrer">
                  &copy; COPYRIGHT 2021
                </a>
              </li>
              <li>
                <a href="https://github.com/DinowSauron/TrailerVision" target="_blank" rel="noreferrer">
                  REPOSITORIO NO GITHUB
                </a>
              </li>
              <li>
                <a href="https://www.themoviedb.org/" target="_blank" rel="noreferrer">
                  The Movie Database
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/luiz-claudio-cardoso/">
                  LUIZ CLAUDIO
                </a>
              </li>
            </ul>
          </footer>
    )
}
