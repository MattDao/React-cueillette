import React, { FormEvent, useRef } from "react";

import axios from "axios";
import { Navigate, redirect, useNavigate } from "react-router-dom";

const Inscription = () => {
  const emailElement = useRef<HTMLInputElement>(null);
  const passwordElement = useRef<HTMLInputElement>(null);

  const handleSubmitForm = (e: FormEvent) => {
    e.preventDefault();

    alert("ajout effectué");
    console.log(emailElement.current?.value);
    console.log(passwordElement.current?.value);
    axios
      .post("http://localhost:8080/api/users/signin", {
        email: emailElement.current?.value,
        password: passwordElement.current?.value,
      })
      .then((response) => {
        console.log("response", response.data);
        // Navigate('/login')
      });
  };

  return (
    <div className="d-flex justify-content-center mt-5">
      <form className="formulaire" onSubmit={handleSubmitForm}>
        <h1>Inscrivez vous</h1>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            ref={emailElement}
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
            ref={passwordElement}
          />
        </div>
        <input type="submit" value="S'inscrire" className="btn btn-success" />
      </form>
    </div>
  );
};

export default Inscription;
