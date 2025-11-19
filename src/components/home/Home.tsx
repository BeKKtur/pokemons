import { useEffect } from "react";
import { usePokemon } from "../../hooks/pokemon/usePokemon";
import scss from "./home.module.scss";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { pokemons, getPokemons } = usePokemon();
  const navigate = useNavigate();
  useEffect(() => {
    getPokemons();
  }, []);
  return (
    <div className={scss.container}>
      <div className="container">
        <div className={scss.mainContainer}>
          {pokemons.map((el, idx) => (
            <div
              key={idx}
              className={scss.card}
              onClick={() => navigate(`/details/${el.name}`)}
            >
              <h3>{el.name}</h3>
              <p>Move to pokemon</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
