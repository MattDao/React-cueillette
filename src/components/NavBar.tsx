import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  
  return (
    <nav className="navbar sticky-top navbar-expand-lg bg-light shadow">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          🪴Société Nature Cueillette et Fleurs
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" end className="nav-link">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/details" className="nav-link">
                Compte utilisateur
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/connexion" className="nav-link">
                Se connecter
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/inscription" className="nav-link">
                S'inscrire
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/details" className="nav-link">
                Panier
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/details" className="nav-link">
                Plus d'options bientôt
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/utilisateurs" className="nav-link">
                Liste des utilisateurs
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
