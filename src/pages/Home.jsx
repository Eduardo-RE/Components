import React from "react";
import NormalButton from "../components/Button/NormalButton";
import Container from "../components/Container/Container";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import TextCard from "../components/TextCard/TextCard";
import TexField from "../components/TextField/TexField";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div style={{ marginTop: "50px" }}>
        <h1 className="title">Campos de texto</h1>
        <TexField />
        <h1 className="title">Botones</h1>
        <NormalButton />
        <h1 className="title">Contenedor de texto y objetos</h1>
        <Container />
        <h1 className="title">Tarjetas</h1>
        <TextCard />
      </div>
      <Footer />
    </>
  );
};

export default Home;
