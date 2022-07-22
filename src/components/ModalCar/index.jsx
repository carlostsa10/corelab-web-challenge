import api from "../../service/api";
import editar from "../../assets/icon-editar.svg";
import heart from "../../assets/icons8-copas-32.png";
import fechar from "../../assets/icons8-excluir.svg";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

function ModalCar({ ...car }) {
  const navigate = useNavigate();
  function handleFavorite() {
    axios
      .post(`http://localhost:4731/favorite/${cars.id}`, {
        id: cars.id,
      })
      .then((response) => {
        console.log(response);
      });
    window.location.href = "/";
  }

  async function handleDelete() {
    try {
      await api.delete(`deleteVehicle/${car.id}`, {
        id: car.id,
      });
    } catch (error) {
      console.log(error.message);
    }
    navigate("/");
  }

  return (
    <div className="card" style={{ backgroundColor: car.color }}>
      <div className="header">
        <div className="icons">
          <img src={editar} />

          <img
            src={fechar}
            onClick={() => handleDelete()}
            className="header-icons"
          />
          <img src={heart} onClick={() => handleFavorite()} />
        </div>
        <div className="content">
          <p className="content-name">
            <strong>{car.name}</strong>
          </p>
          <p>
            <strong>Preço:</strong> {car.price}
          </p>
          <p className="description">
            <strong>Descrição:</strong> Loremi{car.description}
          </p>
          <p>
            <strong>Ano:</strong> {car.year}
          </p>
          {/* <p><strong>Cor:</strong></p> */}
        </div>
      </div>
    </div>
  );
}

export default ModalCar;
