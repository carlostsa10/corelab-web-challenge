import axios from "axios";
import React, { useState, useEffect } from "react";
import lupa from "../assets/iconeLupa.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <section className="header">
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Buscar"
          id="search-car-input"
          // onChange={value => setCarName(value.target.value)}
          onChange={() => {
            alert(
              "quando digitar no campo é para filtar pelos veiculos que correspondem, ou seja, no onChange é para fazer o filtro por qualquer propriedade do veiculo, pode ser pode nome, preço, ano, cor"
            );
          }}
          autoFocus
        >
          <img src={lupa} id="search-icon" />
        </input>
      </div>

      <img src="https://img.icons8.com/windows/32/000000/search-in-list.png" />

      <button className="w-[330px] h-[50px] mt-[32px] mx-auto bg-blue-600 rounded-[100px] flex justify-center items-center text-[20px] font-sans font-medium text-neutral-900">
        ADICIONAR
      </button>
    </section>
  );
}
