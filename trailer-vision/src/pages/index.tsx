import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/index.module.scss';
import { Filmes, HomeProps } from "../lib/indexTypes" 
import { ViewMovieContext } from "../contexts/ViewMovieContext"

import AsideDetails from '../components/AsideFilmDetails';
import HeaderMenu from "../components/HeaderMenu";
import FooterInfo from "../components/FooterInfo";
import FilmArea from "../components/FilmArea";
import ProviderArea from "../components/AsideFilmDetails/ProviderArea";
import VideoArea from '../components/VideoArea';


export default function Home(props: HomeProps) {
  const photoOriginalUrl = "https://image.tmdb.org/t/p/original";




  return (
    <div 
    className={styles.mainContent} 
    style={{backgroundImage: 'url(' + photoOriginalUrl + props.movies.newMovies.results[0].backdrop_path + ')'}}
    >

      <Head>
          <title> Home | Trailer Vision</title>
      </Head>

      <main className={styles.filmContent} id="MainContent">
        <header>
          <HeaderMenu/>
        </header>
        <div className={styles.separator}>
          <section className={styles.moviesArea}>
            <FilmArea genre="Populares na Trailer Vision" filmData={props.movies.mostPopular}/>
            <FilmArea genre="Ficção Cientifica" filmData={props.movies.genSciFi}/>
            <FilmArea genre="Guerra e Política" filmData={props.movies.genWar}/>
            <FilmArea genre="Filmes de Ação" filmData={props.movies.genAction}/>
            <FilmArea genre="Em Breve" filmData={props.movies.releases}/>
            <FilmArea genre="Dramas" filmData={props.movies.genDrama}/>
            <FilmArea genre="Estreias Recentes" filmData={props.movies.newMovies}/>
            <FilmArea genre="Crimes e Investigação" filmData={props.movies.genCrime}/>
            <FilmArea genre="Animações" filmData={props.movies.genAnimation}/>
            <FilmArea genre="Aventura" filmData={props.movies.genAdventure}/>
            <FilmArea genre="Mistérios" filmData={props.movies.genMistery}/>
            <FilmArea genre="Para a família" filmData={props.movies.genFamily}/>
            <FilmArea genre="Filmes de Faroeste" filmData={props.movies.genWestern}/>
            <FilmArea genre="Fantasia" filmData={props.movies.genFantasy}/>
          </section>

          <AsideDetails/>
          
        </div>
        {/* <FilmArea genre="Ficção Cientifica"/>
        <FilmArea genre="Ação e Aventura"/> */}

        <FooterInfo/>

      </main>


    </div>
  )
}


import { GetStaticProps } from "next";
import { GetIndexData } from "../lib/getIndexData"
import React, { useContext } from 'react';

export const getStaticProps: GetStaticProps = async () => {

  const data = await GetIndexData();
  // console.log(data);


  return {
    props: data,

    revalidate: 10
  }

}
