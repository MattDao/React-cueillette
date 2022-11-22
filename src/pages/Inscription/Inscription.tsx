
import React, { FormEvent, useRef } from "react";
import "./Inscription.css";
import axios from "axios";

const Inscription = () => {
  const emailElement = useRef<HTMLInputElement>(null);
  const passwordElement = useRef<HTMLInputElement>(null);

  const handleSubmitForm = (e: FormEvent) => {
    e.preventDefault();

    alert("ajout effectué");
    console.log(emailElement.current?.value);
    console.log(passwordElement.current?.value);
    axios
      .post("http://localhost:8080/api/users", {
        email: emailElement.current?.value,
        password: passwordElement.current?.value,
      })
      .then((response) => {
        console.log("response", response.data);
      });
  };

  return (
    <div className="Inscription">
      <h1>Inscrivez vous</h1>
      <form className="formulaire" onSubmit={handleSubmitForm}>
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
        <input
          type="submit"
          value="Send"
          className="submit-btn btn-success bt-prix"
        />
      </form>
      {/* <form classNameName="formulaire" onSubmit={handleSubmitForm}>
        <div classNameName="form-floating mb-3">
          <input
            type="email"
            classNameName="form-control"
            id="emailUser"
            ref={emailElement}
          />
          <label htmlFor="email">Email</label>
        </div>

        <div classNameName="form-floating">
          <input
            type="password"
            classNameName="form-control"
            id="password"
            ref={passwordElement}
          />
          <label htmlFor="password">Password</label>
        </div>

        <input
          type="submit"
          value="Send"
          classNameName="submit-btn mt-5 btn btn-success ml-0!important"
        />
      </form> */}
    </div>
  );
};

export default Inscription;
