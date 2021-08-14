import { video, Filme, Filmes } from './../../lib/indexTypes';
import { credits, movieProvider } from '../../lib/indexTypes';

export type ProviderAreaProps = {
    providers: movieProvider;
}

export type CastAreaProps = {
    credits: credits;
}

export type RecomendationsProps = {
    recommendations: Filmes;
}

export type MovieModalProps= {
    video: video;
}