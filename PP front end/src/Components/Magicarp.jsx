import { useEffect, useState } from "react";
import Loading from "./Loading";

const Magicarp = ({ pokemonAttack }) => {
  const [loading, setLoading] = useState(true);
  const [magicarp, setMagicarp] = useState();

  const getAMagicarp = () => {
    fetch(`https://localhost:7246/pokemons/magikarp`, {
      method: "GET",
      mode: "no-cors",
    }).then((response) => {
      console.log(response);
      if (response.value != null) {
        setMagicarp(response.value);
        setLoading(false);
      }
    });
  };

  useEffect(() => {
    getAMagicarp();
  });

  if (loading) return <Loading />;
  return (
    <>
      <h1>{magicarp.Name}</h1>
      <h2>{magicarp.Health}</h2>
      <button>Be useless</button>
    </>
  );
};

export default Magicarp;
