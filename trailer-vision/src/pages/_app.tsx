import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import React from 'react'
import { ViewMovieProvider } from '../contexts/ViewMovieContext'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ViewMovieProvider>
      <Component {...pageProps} />
    </ViewMovieProvider>
  )
}

export default MyApp;
