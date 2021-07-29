import styles from "./footer.module.scss"


export function FooterInfo(){
    

    return(
        <footer className={styles.main}>
            <ul>
              <li>
                <a href="#">
                  &copy; COPYRIGHT 2021
                </a>
              </li>
              <li>
                <a href="#">
                  REPOSITORIO NO GITHUB
                </a>
              </li>
              <li>
                <a href="https://www.themoviedb.org/">
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
