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
        console.log("response", response.data);
      });
  };
  return (
    <div className="Inscription">
      <h1>Inscrivez vous</h1>
      <form className="formulaire" onSubmit={handleLoginForm}>
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
        <input
          type="submit"
          value="inscription"
          className="submit-btn btn-success bt-prix"
        />
      </form>
    </div>
  );
};

export default Connexion;
