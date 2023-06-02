const fetchPokemon = (pokemon) => {
    const api = `https://pokeapi.co/api/v2/pokemon/${pokemon}/`;
    fetch(api)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
        })
}

fetchPokemon(1);