import axios from "axios";

const ENDPOINT_URL = "https://pokeapi.co/api/v2/pokemon";

function getAllPokemons() {
  return axios.get(`${ENDPOINT_URL}?limit=100000&offset=0`);
}

const pokemonServices = {
  getAllPokemons,
};

export default pokemonServices;
