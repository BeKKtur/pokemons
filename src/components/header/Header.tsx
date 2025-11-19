import { Link, useNavigate } from "react-router-dom";
import scss from "./header.module.scss";

export default function Header() {
  const navigate = useNavigate();
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
            <Link to="/arena">Arena</Link>
            <Link to="/collections">Collections</Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
