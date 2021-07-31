

function generateDate(data?: Date) {
    const today = data ? data : new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    return [ year, month, day].map(d => d > 9 ? d : '0' + d).join('-')
}

function addDays(days: number) {
    const today =  new Date();
    const nextDay = new Date();

    nextDay.setDate(today.getDate() + days);

    return generateDate(nextDay)
}


export async function GetIndexData() {
    const dateToday = generateDate();
    const dateReleases = addDays(30 * 5); //Next 5 months

    return {
        filmes: {
            releases: [dateToday, dateReleases]
        }
    }
}
