let pokemonNumber = document.querySelector('.pokemon-number');
let pokemonName = document.querySelector('.pokemon-name');
let pokemonImage = document.querySelector('.pokemon')
let form = document.querySelector('form');
let input = form.querySelector('input');
let buttonPrev = document.querySelector('.button-prev');
let buttonNext = document.querySelector('.button-next');
let searchPokemon = 1;


const fetchPokemon = async (pokemon) => {
    const apiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    if (apiResponse.status == 200){
        const data = await apiResponse.json();
        return data;
    }
};


const changePokemonData = async (pokemon) => {
    pokemonName.innerHTML = "Loading ...";
    pokemonNumber.innerHTML = '';

    const data = await fetchPokemon(pokemon);

    if(data){
        pokemonImage.style.display = "block";
        pokemonNumber.innerHTML = data.id;
        pokemonName.innerHTML = data.name;
        pokemonImage.src = data.sprites.versions["generation-v"]["black-white"]["animated"]["front_default"];
        input.value = '';
        searchPokemon = data.id;
    }else{
        pokemonName.innerHTML = "Not found :c";
        pokemonNumber.innerHTML = ''; 
        pokemonImage.style.display = "none";
    }


}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    changePokemonData(input.value.toLocaleLowerCase());
})

buttonPrev.addEventListener('click', (event) => {
    if(searchPokemon > 1){
        changePokemonData(searchPokemon -= 1);
    }
})

buttonNext.addEventListener('click', (event) => {
    changePokemonData(searchPokemon += 1);
})

changePokemonData(searchPokemon);

