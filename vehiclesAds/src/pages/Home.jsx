import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { adicionarItem } from "../../utilidades/localStorage";
import axios from "../../servicos/api";

import Logo from "../assets/logoVAds.png";

function Home() {
  const navigateTo = useNavigate();

  const [email, setEmail] = useState("");

  const [loginErro, setLoginErro] = useState(false);

  async function manipularEnviar(e) {
    e.preventDefault();
    setEmailInvalido(false);
    setSenhaInvalida(false);
    setLoginErro(false);

    try {
      if (!email) {
        setEmailInvalido(true);
        return;
      }
      if (!senha) {
        setSenhaInvalida(true);
        return;
      }

      const resposta = await axios.post("/login", {
        email,
        senha,
      });

      const { token, usuario } = resposta.data;
      adicionarItem("token", token);
      adicionarItem("usuarioNome", usuario.nome);

      navigateTo("/home");
    } catch (error) {
      setLoginErro(error.response.data);
      console.log(loginErro);
    }
  }

  return (
    <div className="container">
      <img src={Logo} alt="logo da VehicleAds"></img>
      <div className="forms"></div>
    </div>
  );
}

export default Home;
