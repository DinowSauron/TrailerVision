
import { GetStaticPaths, GetStaticProps } from "next";
import { getImportantPaths } from "../../lib/getIndexData"
import { MovieProps, Params } from "../../lib/movieTypes";

// 497698

export default function Movie({movie}: MovieProps){


    return (
        <h1>{movie.title}</h1>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    // para pre-renderizar as rotas mais impoortantes

    const data = await getImportantPaths();

    const paths = data.results.map(movie => {
        return {
            params: {
                slug: movie.id.toString()
            }
        }
    });

    return {
        paths,
        fallback: "blocking"
    }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    const slug  = params?.slug || "";

    const data = await fetch("http://localhost:3000/api/getMovieDetails", {
        method: "POST",
        headers: {
            MovieId: (slug.toString())
        }
    }).then((res) => res.json());

    return {
        props: {
            movie: data
        },
        revalidate: 3600 * 24
    }


}