import { useState } from "react";
import Loading from "./Loading";
import Pokemon from "./Pokemon";
import Magicarp from "./Magicarp";

const Game = () => {
  const [howFuckedUpIsFuckedUp, setHowFuckedUpIsFuckedUp] = useState(false);
  const [loading, setLoading] = useState(true);

  const pokemonAttack = (name) => {
    const query = "pokemonName";
    fetch(`https://localhost:7246/${"/pokemons/attack"}?${query}=${name}`, {
      method: "GET",
      mode: "no-cors",
    }).then((response) => {
      if (response.value != null) {
      } else {
        setHowFuckedUpIsFuckedUp("Thats fucked up");
      }
    });
  };

  if (howFuckedUpIsFuckedUp) return <h1>{howFuckedUpIsFuckedUp}</h1>;

  return (
    <>
      <Pokemon name={"Pikachu"} pokemonAttack={pokemonAttack} />
      <Magicarp pokemonAttack={pokemonAttack} />
    </>
  );
};

export default Game;
