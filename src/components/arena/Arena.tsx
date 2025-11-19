import { useEffect, useState } from "react";
import { useCollections } from "../../hooks/collection/useCollections";
import scss from "./arena.module.scss";
import { usePokemon } from "../../hooks/pokemon/usePokemon";

export default function Arena() {
  const { collection } = useCollections();
  const { getPokemonByName, getPokemon2ByName, pokemon, pokemon2 } =
    usePokemon();
  const [name1, setName1] = useState<string>(collection[0].name);
  const [name2, setName2] = useState<string>(collection[0].name);
  const [state, setState] = useState<boolean>(false);
  useEffect(() => {
    getPokemonByName(name1);
  }, [name1]);
  useEffect(() => {
    getPokemon2ByName(name2);
  }, [name2]);

  const res = pokemon?.stats.reduce(
    (acc, el, idx) => {
      if (el.base_stat > (pokemon2?.stats?.[idx]?.base_stat ?? 0)) {
        acc.pokemon1++;
      } else {
        acc.pokemon2++;
      }
      return acc;
    },
    {
      pokemon1: 0,
      pokemon2: 0,
    }
  );
  function winner() {
    setState(true);
    res?.pokemon1! > res?.pokemon2! ? "win1" : "win2";
  }

  return (
    <div className={scss.container}>
      <div className="container">
        <div className={scss.mainContainer}>
          <div className={scss.battle}>
            <div className={scss.pokemon}>
              <select onChange={(e) => setName1(e.target.value)} value={name1}>
                {collection.map((el) => (
                  <option value={el.name} key={el.name}>
                    {el.name}
                  </option>
                ))}
              </select>
              <img src={pokemon?.sprites?.front_default} alt="photo" />
              <h3>{pokemon?.forms?.[0]?.name}</h3>
            </div>
            <div className={scss.winner}>
              <h2 onClick={winner}>Battle</h2>
              <p style={{ display: state ? "block" : "none" }}>
                {res?.pokemon1! > res?.pokemon2! ? "won 1" : "won 2"}
              </p>
            </div>

            <div className={scss.pokemon}>
              <select onChange={(e) => setName2(e.target.value)} value={name2}>
                {collection.map((el) => (
                  <option value={el.name} key={el.name}>
                    {el.name}
                  </option>
                ))}
              </select>
              <img src={pokemon2?.sprites?.front_default} alt="photo" />
              <h3>{pokemon2?.forms?.[0]?.name}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
