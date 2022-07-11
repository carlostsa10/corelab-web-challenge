import { Link, useNavigate, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";

import logo from "../assets/logoVAds.png";
import Header from "../components/Header";

import ModalCar from "../components/ModalCar";
import ModalFavorite from "../components/ModalCar";

export function Home() {
  const navigate = useNavigate();
  const location = useLocation();

  const [vehicles, setVehicles] = useState([]);

  return (
    <>
      <section className="container">
        <section className="sideA">
          <img src={logo} className="center w-12"></img>
        </section>
        <section className="sideB ">
          <div>
            <Header />
          </div>
          <div className="favorites flex">
            <h2 className="title">Meus Favoritos</h2>
            <ModalFavorite />
            <div className="cards-wrapper"></div>
          </div>

          <div className="my-car-announces">
            <h2 className="title">Meus Anúncios</h2>
            <ModalCar />
          </div>
        </section>
      </section>
    </>
  );
}
