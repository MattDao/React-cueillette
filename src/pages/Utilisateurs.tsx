import axios from "axios";
import React, { useEffect } from "react";

export interface User {
  email: string;
  password: string;
}
let tab: User[] = [];

const Utilisateurs = () => {
  useEffect(() => {
    let tokens = localStorage.getItem("token");
    axios
      .get("http://localhost:8080/api/users", {
        headers: { authorization: `Bearer ${tokens}` },
      })
      .then((response) => {
        tab = response.data.data;
        console.log(tab);
      });
  }, []);

  return (
    <div>
      {tab.map((users, i) => (
        <ul>
          <li key={i}>
            {users.email}, {users.password}
          </li>
        </ul>
      ))}{" "}
    </div>
  );
};

export default Utilisateurs;
