export const HomeData = data => {
    return fetch('https://reqres.in/api/users/', {
        method: 'GET',
    })
        .then(response => response.json())
        .then(response => response)
        .catch(e => console.log(e));
}
