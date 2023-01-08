import React from "react";
import NormalButton from "../components/Button/NormalButton";
import Navbar from "../components/Navbar/Navbar";
import TexField from "../components/TextField/TexField";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <h1 className="title">Campos de texto</h1>
      <TexField />
      <h1 className="title">Botones</h1>
      <NormalButton />
    </>
  );
};

export default Home;
