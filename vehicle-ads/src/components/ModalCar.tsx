import axios from "axios";
import { useEffect, useState } from "react";
import filtro from "../assets/iconeFiltro.svg";
import fechar from "../assets/iconeFechar.svg";

function ModalCar(props) {
  function handleFavorite() {
    axios
      .post(`http://localhost:4731/favorite/${props.id}`, {
        id: props.id,
      })
      .then((response) => {
        console.log(response);
      });
    window.location.href = "/";
  }

  function handleDelete() {
    axios
      .post(`http://localhost:4731/delete/${props.id}`, {
        id: props.id,
      })
      .then((response) => {
        console.log(response);
      });
    window.location.href = "/";
  }

  return (
    <div className="card" style={{ backgroundColor: props.color }}>
      <div className="header">
        <img src={filtro} />

        <img
          src={fechar}
          onClick={() => handleDelete()}
          className="header-icons"
        />
        <img
          src="https://img.icons8.com/ios/50/000000/heart-with-arrow--v1.png"
          onClick={() => handleFavorite()}
        />
      </div>
      <div className="content">
        <p>
          <strong>{props.name}</strong>
        </p>
        <p>
          <strong>Preço:</strong> {props.price}
        </p>
        <p>
          <strong>Descrição:</strong> {props.description}
        </p>
        <p>
          <strong>Ano:</strong> {props.year}
        </p>
        {/* <p><strong>Cor:</strong></p> */}
      </div>
    </div>
  );
}

export default ModalCar;
