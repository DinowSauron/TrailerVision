import { ReactNode } from "react";
import { Filme } from "../lib/indexTypes";


export interface ViewMovieProviderData {
    hasMovieSelected: boolean;
    selectedMovie: Filme;
    handleSelectedMovie: ({}: SelectedMovieProps) => void;
}

export type ViewMovieProviderProps = {
    children: ReactNode;
}

export type SelectedMovieProps = {
    movie?: Filme;
}