import React from "react";
import { Plante } from "../pages/Home";

interface CardProps {
  photo: Plante;
}

const Card = ({ photo }: CardProps) => {
  return (
    <div
      className="card "
      style={{
        width: "19rem",
        height: "26rem",
        padding: "15px ",
        marginRight: "30px",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-heart jaime"
        viewBox="0 0 16 16"
      >
        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
      </svg>
      <img
        src={`http://localhost:8080/assets/${photo.url_picture}`}
        className="card-img-top"
        alt="plantes"
      />
      {photo.name}-{photo.category}
      <div>
        <div>
          <div>
            <div className="ratingCard">
              <a href="#5" title="Donner 5 étoiles">
                ☆
              </a>
              <a href="#4" title="Donner 4 étoiles">
                ☆
              </a>
              <a href="#3" title="Donner 3 étoiles">
                ☆
              </a>
              <a href="#2" title="Donner 2 étoiles">
                ☆
              </a>
              <a href="#1" title="Donner 1 étoile">
                ☆
              </a>
            </div>
          </div>
          {/* <div>⭐ {photo.rating}</div> */}

          <div className="space">
            💵 {photo.unitprice_ati}€{/* {photo.unitprice_ati} € */}
            <button type="button" className="btn btn-success">
              Acheter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
