import { Link, useNavigate, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import api from "../service/api";
import logo from "../assets/logoVAds.png";
import Header from "../components/Header";

import ModalCar from "../components/ModalCar";
import FormCreate from "../components/FormCreate";
import "../styles/home.css";

export function Home() {
  const [openForm, setOpenForm] = useState(false);
  const [cars, setCars] = useState([]);

  async function loadCars() {
    try {
      const { data } = await api.get("/vhs");

      setCars([...data]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadCars();
  }, []);

  return (
    <>
      <div className="container-layout">
        <section className="container">
          <section className="sideA logo"></section>
          <section className="sideB">
            {<Header setOpenForm={setOpenForm} />}
            <h2 className="title">Meus Favoritos</h2>
            <div className="favorites"></div>

            <h2 className="title">Meus Anúncios</h2>
            <div className="my-car-announces">
              {cars.map((car) => (
                <ModalCar key={car.id} {...car} />
              ))}
            </div>
          </section>
        </section>
      </div>
      {openForm && <FormCreate setOpenForm={setOpenForm} />}
    </>
  );
}
