import React, { FormEvent, useRef } from "react";
import axios from "axios";

const Connexion = () => {
  const emailConnexionElement = useRef<HTMLInputElement>(null);
  const passwordConnexionElement = useRef<HTMLInputElement>(null);

  const handleLoginForm = (e: FormEvent) => {
    e.preventDefault();

    alert("ajout effectué");
    console.log(emailConnexionElement.current?.value);
    console.log(passwordConnexionElement.current?.value);
    axios
      .post("http://localhost:8080/api/users/login", {
        email: emailConnexionElement.current?.value,
        password: passwordConnexionElement.current?.value,
      })
      .then((response) => {
        const token = response.data.token;
        //set le token dans le localstorage
        localStorage.setItem("token", token);
        console.log("response", response.data.token);
      });
  };
  return (
    <div
      className="d-flex justify-content-center mt-5
"
    >
      <form className="formulaire" onSubmit={handleLoginForm}>
        <h1>Connexion Utilisateur</h1>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            ref={emailConnexionElement}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            ref={passwordConnexionElement}
          />
        </div>
        <input type="submit" value="connexion" className="btn btn-success" />
      </form>
    </div>
  );
};

export default Connexion;
