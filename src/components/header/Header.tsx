import { Link, useNavigate } from "react-router-dom";
import scss from "./header.module.scss";
import { useCollections } from "../../hooks/collection/useCollections";

export default function Header() {
  const navigate = useNavigate();
  const { collection } = useCollections();
  return (
    <div className={scss.container}>
      <div className="container">
        <div className={scss.mainContainer}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
            alt="photo"
            onClick={() => navigate("/")}
          />
          <nav>
            {collection.length < 2 ? (
              <button
                onClick={() => {
                  alert(
                    "У вас должно быть минимум 2 покемона чтобы зайти в Арену"
                  );
                }}
                className={scss.btn}
              >
                Arena
              </button>
            ) : (
              <Link to="/arena">Arena</Link>
            )}
            <Link to="/collections">Collections</Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
