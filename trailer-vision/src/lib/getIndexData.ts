import { Filme } from "./indexTypes"


function generateDate(data?: Date) {
    const today = data ? data : new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    return [ year, month, day].map(d => d > 9 ? d : '0' + d).join('-')
}

function generateNextDate(days: number) {
    const today =  new Date();
    const nextDay = new Date();

    nextDay.setDate(today.getDate() + days);
    return generateDate(nextDay)
}


export async function GetIndexData() {
    const dateToday = generateDate();
    const dateReleases = generateNextDate(30 * 5); //Next 5 months

    const apiKey = process.env.API_KEY;

    const data = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=pt-BR&region=BR&release_date.gte=${dateToday}&release_date.lte=${dateReleases}&with_release_type=2|3`)
    .then((res) => res.json());

    console.log("Data Requisitada");


    return {
        filmes: {
            releases: data
        }
    }
}
