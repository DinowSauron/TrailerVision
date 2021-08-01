import Head from 'next/head';
import styles from '../styles/index.module.scss';
import { Filmes, HomeProps } from "../lib/indexTypes" 

import HeaderMenu from "../components/HeaderMenu";
import FooterInfo from "../components/FooterInfo";
import FilmArea from "../components/FilmArea";


export default function Home(props: HomeProps) {
  return (
    <div className={styles.mainContent} >

        <Head>
            <title> Home | Trailer Vision</title>
        </Head>

        <main className={styles.filmContent}>
          <header>
            <HeaderMenu/>
          </header>

          <FilmArea genre="Em Breve" filmData={props.filmes.releases}/>
          {/* <FilmArea genre="Ficção Cientifica"/>
          <FilmArea genre="Ação e Aventura"/> */}


          <FooterInfo/>
        </main>

    </div>
  )
}


import { GetStaticProps } from "next";
import { GetIndexData } from "../lib/getIndexData"

export const getStaticProps: GetStaticProps = async () => {

  const data = await GetIndexData();
  // console.log(data);


  return {
    props: data,

    revalidate: 10
  }

}
