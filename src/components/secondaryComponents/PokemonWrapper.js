import { useState, useEffect } from "react";
import styled from "styled-components";
import pokemonServices from "../../services/pokemonAPI.js";
import { ThreeDots } from "react-loader-spinner";
import Pokemon from "./Pokemon.js";

function PokemonWrapper() {
  const [max, setMax] = useState(48);
  const [isDisable, setIsDisable] = useState(false);
  const [pokemons, setPokemons] = useState(null);

  useEffect(() => {
    setIsDisable(true);
    pokemonServices.getAllPokemons().then((response) => {
      setPokemons(response.data);
      setIsDisable(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isDisable || pokemons === null) {
    return (
      <ThreeDots
        height="180"
        width="180"
        radius="9"
        color="#FFFFFF"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    );
  }

  const toRender = pokemons.results.slice(-max);

  console.log(toRender);
  return (
    <Wrapper>
      {toRender.map((pokemon, index) => {
        return <Pokemon id={index} name={pokemon.name} />;
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
`;

export default PokemonWrapper;
