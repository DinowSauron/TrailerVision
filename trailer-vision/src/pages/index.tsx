import Head from 'next/head';
import styles from '../styles/index.module.scss';
import { Filmes, HomeProps } from "../lib/indexTypes" 

import HeaderMenu from "../components/HeaderMenu";
import FooterInfo from "../components/FooterInfo";
import FilmArea from "../components/FilmArea";


export default function Home(props: HomeProps) {
  const photoUrl = "https://image.tmdb.org/t/p/w500";

  console.log('url(' + photoUrl + props.movies.newMovies.results[0].backdrop_path + ')')
  return (
    <div 
    className={styles.mainContent} 
    style={{backgroundImage: 'url(' + photoUrl + props.movies.newMovies.results[0].backdrop_path + ')'}}
    >

        <Head>
            <title> Home | Trailer Vision</title>
        </Head>

        <main className={styles.filmContent} id="MainContent">
          <header>
            <HeaderMenu/>
          </header>
          
          <section className={styles.moviesArea}>
            <FilmArea genre="Populares na Trailer Vision" filmData={props.movies.mostPopular}/>
            <FilmArea genre="Ficção Cientifica" filmData={props.movies.genSciFi}/>
            <FilmArea genre="Filmes de Guerra" filmData={props.movies.genWar}/>
            <FilmArea genre="Filmes de Ação" filmData={props.movies.genAction}/>
            <FilmArea genre="Em Breve" filmData={props.movies.releases}/>
            <FilmArea genre="Estreias Recentes" filmData={props.movies.newMovies}/>
          </section>

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
