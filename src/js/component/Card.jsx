import React from "react";
const Card = () => {
    return(
        <div className="card" style={{width: "18rem" }}>
        <img src="https://picsum.photos/100/100" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">titulo de Esta Carta</h5>
          <p className="card-text">Un texto de ejemplo rápido para desarrollar el título de la tarjeta y constituir la mayor parte del contenido de la tarjeta.</p>
          <a href="#" className="btn btn-primary">Vamos A Otro Lugar</a>
        </div>
      </div>
    );
};

export default Card