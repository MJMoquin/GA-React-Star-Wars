const BASE_URL = 'https://swapi.dev/api/starships/?page='

export function getAllStarships() {
    return fetch(`${BASE_URL}`, {mode: "cors"})
    .then(res => res.json());
}
