import { createContext, useState } from "react";
import { Filme } from "../lib/indexTypes";
import { SelectedMovieProps, ViewMovieProviderProps } from "./contextTypes";
import { ViewMovieProviderData } from "./contextTypes";



export const ViewMovieContext = createContext({} as ViewMovieProviderData);

export function ViewMovieProvider({children} : ViewMovieProviderProps) {

    const [hasMovieSelected, setHasMovieSelected] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState({} as Filme);

    function handleSelectedMovie({movie}: SelectedMovieProps) {

        if (movie === selectedMovie && hasMovieSelected == true && selectedMovie != undefined) {
            setHasMovieSelected(false);
            console.log("desactive1");
            return;
        }
        if (movie) {
            if(movie != selectedMovie) {
                setSelectedMovie(movie);
            }
            setHasMovieSelected(true);
            console.log("active");
            return;
        }
        if (!movie) {
            setHasMovieSelected(false);
            console.log("desactive2");
        }
    }

    
    return (
        <ViewMovieContext.Provider value={{
            hasMovieSelected, 
            selectedMovie,
            handleSelectedMovie,
        }}>
            {children}
        </ViewMovieContext.Provider>
    )
}