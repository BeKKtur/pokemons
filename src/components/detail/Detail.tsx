import { useParams } from "react-router-dom";
import scss from "./detail.module.scss";
import { usePokemon } from "../../hooks/pokemon/usePokemon";
import { useEffect, useState } from "react";
import { useCollections } from "../../hooks/collection/useCollections";

export default function Detail() {
  const [showMoves, setShowMoves] = useState(3);
  const { name } = useParams();
  const { getPokemonByName, pokemon } = usePokemon();
  useEffect(() => {
    getPokemonByName(name!);
  }, []);
  console.log(pokemon);

  const { addToCollection } = useCollections();
  const moves = pokemon?.moves || [];
  function addPokemon() {
    if (pokemon) {
      addToCollection(pokemon);
    }
  }

  return (
    <div className={scss.container}>
      <div className="container">
        <div className={scss.mainContainer}>
          <div className={scss.catch} onClick={() => addPokemon()}>
            <img
              src="https://m.media-amazon.com/images/I/71sJt7lQXmL._AC_UF894,1000_QL80_.jpg"
              alt="photo"
            />
            <p>Catch</p>
          </div>
          <div className={scss.info}>
            <img src={pokemon?.sprites.front_default} alt="photo" />
            <h2>{pokemon?.name}</h2>
          </div>
          <div className={scss.abilities}>
            <h2>Abilities:</h2>
            {pokemon?.abilities.map((el, idx) => (
              <div key={idx} className={scss.ability}>
                <p>{el.ability.name}</p>
              </div>
            ))}
          </div>
          <div className={scss.moves}>
            <h2>Moves</h2>
            {moves.slice(0, showMoves).map((el, idx) => (
              <div key={idx} className={scss.move}>
                <p>{el.move?.name}</p>
              </div>
            ))}
            {showMoves < moves.length && (
              <button
                onClick={() => setShowMoves(showMoves + 3)}
                className="btn"
              >
                More
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
