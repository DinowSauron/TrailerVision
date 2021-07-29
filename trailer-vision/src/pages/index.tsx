import Head from 'next/head';
import styles from '../styles/index.module.scss';

import { HeaderMenu } from "../components/HeaderMenu";
import { FooterInfo } from "../components/FooterInfo";
import { FilmArea } from "../components/FilmArea";

export default function Home() {
  return (
    <div className={styles.mainContent} >

        <Head>
            <title> Home | Trailer Vision</title>
        </Head>

        <main className={styles.filmContent}>
          <header>
            <HeaderMenu/>
          </header>

          <FilmArea genre="Lançamentos"/>
          <FilmArea genre="Ficção Cientifica"/>
          <FilmArea genre="Ação e Aventura"/>


          <FooterInfo/>
        </main>

    </div>
  )
}
