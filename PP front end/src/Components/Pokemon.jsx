import { useEffect, useState } from "react";
import Loading from "./Loading";

const query = "pokemonName";

const Pokemon = ({ name }) => {
  const getAPokemon = (pokemonName) => {
    fetch(`https://localhost:7246/pokemons?pokemonName=${pokemonName}`, {
      method: "GET",
      mode: "no-cors",
    }).then((respnse) => {
      console.log(respnse);
      if (respnse.value != null) {
        setPokemon(respnse.value);
        setLoading(false);
      } else {
        setHowFuckedUpIsFuckedUp("Thats fucked up 1");
      }
    });
  };

  const pokemonAttack = () => {
    fetch(`https://localhost:7246/${"/pokemons/attack"}?${query}=${name}`, {
      method: "GET",
      mode: "no-cors",
    }).then((response) => {
      console.log(response);
      if (response.value != null) {
        setMagicarp(response.value);
        setLoading(false);
      } else {
        setHowFuckedUpIsFuckedUp("Thats fucked up 2");
      }
    });
  };

  useEffect(() => {
    getAPokemon(name);
  });

  const [magicarp, setMagicarp] = useState();
  const [loadingMagicarp, setLoadingMagicarp] = useState(true);
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState();
  const [howFuckedUpIsFuckedUp, setHowFuckedUpIsFuckedUp] = useState(false);

  if (howFuckedUpIsFuckedUp) return <h1>{howFuckedUpIsFuckedUp}</h1>;
  if (loading || loadingMagicarp) return <Loading />;
  return (
    <main>
      <h1>{pokemon.Name}</h1>
      <h2>{pokemon.Health}</h2>
      <button onClick={pokemonAttack}></button>
    </main>
  );
};
export default Pokemon;
