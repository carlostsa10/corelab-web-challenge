import Lupa from "../../assets/iconeLupa.svg";
import Filter from "../../assets/iconeFiltro.svg";
import "./styles.css";

export default function Input({ ...propsInput }) {
  return (
    <div className="header-search">
      <img
        src={Lupa}
        alt="Lupa de pesquisa"
        className="marginright5 header-img"
      />
      <input type="text" id="search" placeholder="Buscar" />
      <img src={Filter} alt="Icone de filtro" className="header-img" />
    </div>
  );
}
