import React from "react";
import "./inicio.css";

import Botao from "../../components/Botao";
import { Link } from "react-router-dom";
import MenuH from "../../components/menu-h/MenuH";

export default function Inicio() {
  
  return (
    <div className="container-tela-inicio">
        
      <div className="Titulo-tela-inicio">
        <h1 className="nome">LibraryClass</h1>
        <img src="logo.png" alt="" className="logo" />
      </div>
      <div className="conteudo-tela-inicio">
        <h2 className="h2Inicio">Para onde deseja ir ?</h2>
        <br />
        <br />
       <button className="botaoInicio">Login</button>
        <br />
        <button className="botaoInicio">Cadastro</button>
      
      </div>
    </div>
  );
}
