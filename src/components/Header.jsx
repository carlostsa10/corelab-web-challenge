import filtro from "../assets/icons8-opções-de-ordenação-50.png";
import Lupa from "../assets/icons8-pesquisar.svg";

import "../styles/header.css";

export default function Header({ setOpenForm }) {
  function handleEdit() {}
  return (
    <>
      <div className="input-wrapper ">
        <img className="lupa" src={Lupa} onClick={() => handleEdit()} />
        <input
          type="text"
          placeholder="Buscar"
          className="input-search"
          // onChange={value => setCarName(value.target.value)}
        ></input>
        <img src={filtro} />
      </div>

      <button className="btn-header" onClick={() => setOpenForm(true)}>
        ADICIONAR
      </button>
    </>
  );
}
