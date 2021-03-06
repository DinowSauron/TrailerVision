import { createContext, useState } from "react";
import { Filme, FilmeDetails } from "../lib/indexTypes";
import { SelectedMovieProps, ViewMovieProviderProps } from "./contextTypes";
import { ViewMovieProviderData } from "./contextTypes";



export const ViewMovieContext = createContext({} as ViewMovieProviderData);

export function ViewMovieProvider({children} : ViewMovieProviderProps) {

    const [hasMovieSelected, setHasMovieSelected] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState({} as FilmeDetails);

    async function handleSelectedMovie({movie}: SelectedMovieProps) {
        const selectedId = movie?.id;
        const actualId = selectedMovie?.id || undefined;
        setHtmlCursor("wait");

        // console.log(selectedId);

        if (selectedId === actualId && hasMovieSelected == true && selectedMovie != undefined) {
            setHasMovieSelected(false);
            // console.log("desactive1");
            setHtmlCursor("default")
            return;
        }
        if (selectedId) {
            if(selectedId != actualId) {
                setSelectedMovie(await fetch("/api/getMovieDetails", {
                    method: "POST",
                    headers: {
                        MovieId: (selectedId.toString())
                    }
                }).then((res) => res.json()));
            }
            
            setHasMovieSelected(true);
            // console.log("active");
            setHtmlCursor("default")
            return;
        }
        if (!selectedId) {
            setHasMovieSelected(false);
            // console.log("desactive2");
            setHtmlCursor("default")
        }
    }

    function setHtmlCursor(type: "default" | "wait") {
        document.body.style.cursor = type;
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