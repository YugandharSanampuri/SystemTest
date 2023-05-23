export const HomeData = (Search,URL) => {
    return fetch(URL===null?'https://swapi.dev/api/planets/?search='+Search:URL, {
        method: 'GET',
    })
        .then(response => response.json())
        .then(response => response)
        .catch(e => console.log(e));
}
