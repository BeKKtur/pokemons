import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Collection from "./components/collection/Collection";
import Detail from "./components/detail/Detail";
import Arena from "./components/arena/Arena";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/arena" element={<Arena />} />
        <Route path="/collections" element={<Collection />} />
        <Route path="/details/:name" element={<Detail />} />
      </Routes>
    </div>
  );
};

export default App;
