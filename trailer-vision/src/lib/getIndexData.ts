

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


// Main Function
export async function GetIndexData() {
    const dateToday = generateDate();
    const dateNextMonths = generateNextDate(30 * 5); //Next 5 months
    const datePrevMonths = generateNextDate(-(30 * 3)); //Previous 3 months

    const data = {
        releases: await fetch(getDiscoverURL(dateToday, dateNextMonths)).then((res) => res.json()),
        newMovies: await fetch(getDiscoverURL(datePrevMonths, dateToday)).then((res) => res.json()),
        mostPopular: await fetch(getPopularURL()).then((res) => res.json()),
        genSciFi: await fetch(getGenreURL(878)).then((res) => res.json()),
        genAction: await fetch(getGenreURL(28)).then((res) => res.json()),
        genWar: await fetch(getGenreURL(10752)).then((res) => res.json()),
    }

    console.log("---Data Requisitada---");


    return {
        movies: data
    }
}
