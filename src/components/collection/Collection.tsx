import { useCollections } from "../../hooks/collection/useCollections";
import scss from "./collection.module.scss";

export default function Collection() {
  const { collection, removePokemon } = useCollections();
  function release(name: string) {
    removePokemon(name);
    alert("RELEASED!");
  }

  return (
    <div className={scss.container}>
      <div className="container">
        <div className={scss.mainContainer}>
          {collection.length == 0 ? (
            <h1>U don't have pokemon</h1>
          ) : (
            collection.map((el, idx) => (
              <div key={idx} className={scss.collection}>
                <img src={el.sprites.front_default} alt="photo" />
                <h2>{el.name}</h2>
                <div className={scss.catch} onClick={() => release(el.name)}>
                  <img
                    src="https://cdn1.iconfinder.com/data/icons/pokemon-set/24/Open-Pokeball-512.png"
                    alt="photo"
                  />
                  <button>RELEASE</button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
