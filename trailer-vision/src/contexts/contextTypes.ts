import { FilmeDetails } from './../lib/indexTypes';
import { ReactNode } from "react";
import { Filme } from "../lib/indexTypes";


export interface ViewMovieProviderData {
    hasMovieSelected: boolean;
    selectedMovie: FilmeDetails;
    handleSelectedMovie: ({}: SelectedMovieProps) => void;
}

export type ViewMovieProviderProps = {
    children: ReactNode;
}

export type SelectedMovieProps = {
    movie?: Filme;
}