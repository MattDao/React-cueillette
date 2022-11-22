
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Connexion from "./pages/Connexion";
import Inscription from "./pages/Inscription/Inscription";

const App = () => {

  return (
    <div style={{ width: "max", height: "max" }}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/inscription" element={<Inscription />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
};

export default App;
