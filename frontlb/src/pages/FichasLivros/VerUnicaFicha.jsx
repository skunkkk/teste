import React from "react";
import Navbar from "../../components/Navbar/NavBar";

export default function VerUnicaFicha() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
      }}
    >
       <Navbar/>
      <h1>Ficha Unica:</h1>
      <li></li>
    </div>
  );
}
