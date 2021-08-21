import { Filmes, HomeProps } from './indexTypes';


function generateDate(data?: Date) {
    const today = data ? data : new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    return [ year, month, day].map(d => d > 9 ? d : '0' + d).join('-');
}

function generateNextDate(days: number) {
    const today =  new Date();
    const nextDay = new Date();

    nextDay.setDate(today.getDate() + days);
    return generateDate(nextDay)
}

function getDiscoverURL(minDay: string, MaxDay: string) {
    const apiKey = process.env.API_KEY;

    return `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=pt-BR&region=BR&release_date.gte=${minDay}&release_date.lte=${MaxDay}&with_release_type=2|3`
}

function getPopularURL(){
    const apiKey = process.env.API_KEY;

    return `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR&region=BR&page=1`
}


function getGenreURL(genre: number){
    //https://api.themoviedb.org/3/genre/movie/list?api_key={}&language=pt-BR&id=35
    const apiKey = process.env.API_KEY;

    return `https://api.themoviedb.org/3/genre/${genre}/movies?api_key=${apiKey}&language=pt-BR&region=BR`
}



export async function getImportantPaths() {
    return await fetch(getPopularURL()).then((res) => res.json()) as Filmes;
}

// Main Function
export async function GetIndexData() {
    const dateToday = generateDate();
    const dateNextMonths = generateNextDate(30 * 5); //Next 5 months
    const datePrevMonths = generateNextDate(-(30 * 3)); //Previous 3 months

    const data = {
        releases: await fetch(getDiscoverURL(dateToday, dateNextMonths)).then((res) => res.json()),
        newMovies: await fetch(getDiscoverURL(datePrevMonths, dateToday)).then((res) => res.json()),
        mostPopular: await getImportantPaths(),
        genSciFi: await fetch(getGenreURL(878)).then((res) => res.json()),
        genAction: await fetch(getGenreURL(28)).then((res) => res.json()),
        genWar: await fetch(getGenreURL(10752)).then((res) => res.json()),
        genDrama: await fetch(getGenreURL(18)).then((res) => res.json()),
        genCrime: await fetch(getGenreURL(80)).then((res) => res.json()),
        genAnimation: await fetch(getGenreURL(16)).then((res) => res.json()),
        genAdventure: await fetch(getGenreURL(12)).then((res) => res.json()),
        genMistery: await fetch(getGenreURL(9648)).then((res) => res.json()),
        genFamily: await fetch(getGenreURL(10751)).then((res) => res.json()),
        genFantasy: await fetch(getGenreURL(14)).then((res) => res.json()),
        genWestern: await fetch(getGenreURL(37)).then((res) => res.json()),
    }

    console.log("---Data Requisitada---");


    return {
        movies: data
    }
}
