import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@material-ui/core";
import "../App.css";
import AppNav from "./AppNav";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="App">
      <AppNav />
      <header className="App-header">
        <img
          src={process.env.PUBLIC_URL + "/resources/pik.png"}
          width="600"
          alt="poke"
        />
        <h1>
          <Link to="/pokemons">Ver Pokémons</Link>
        </h1>
        <br></br>
        <br></br>
      </header>
      <div className="Background-Img1">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div>
          <Box color="white">
            <Typography variant="h1">Todo Sobre Pokémon</Typography>
          </Box>
          <Box>
            <br></br>
            <br></br>
            <Box color="white" variant="h3" margin="3vh">
              Pokémon (ポケモン Pokemon) es una franquicia de medios que
              originalmente comenzó como un videojuego RPG, pero debido a su
              popularidad ha logrado expandirse a otros medios de
              entretenimiento como series de televisión, juegos de cartas, ropa,
              entre otros, convirtiéndose en una marca que es reconocida en el
              mercado mundial. Las ventas de videojuegos hasta el 1 de diciembre
              de 2006 habían alcanzado una cantidad de 340 millones de
              ejemplares (incluyendo la venta de la versión Pikachu de la
              consola Nintendo 64), logrando ocupar el segundo lugar de las
              sagas de videojuegos más vendidos de Nintendo. La franquicia
              celebró su décimo aniversario el 27 de febrero de 2006. La saga de
              videojuegos es desarrollada por la compañía programadora de
              software japonesa Game Freak, con personajes creados por Satoshi
              Tajiri para la empresa de juguetes Creatures Inc., y a su vez
              distribuida por Nintendo.
            </Box>
            <br></br>
            <br></br>
            <br></br>
            <Box color="white" variant="h3">
              La misión en estos juegos es capturar y entrenar a los pokémon
              (criaturas cuya denominación da nombre al juego), que hasta la
              fecha alcanzan el número de 890. La posibilidad de intercambiarlos
              le hizo conseguir una popularidad que se plasmó en un éxito de
              ventas y la consiguiente aparición de una serie animada, películas
              y diverso merchandising como peluches, juguetes y cartas.
            </Box>
            <br></br>
            <br></br>
            <br></br>
            <Box color="white" variant="h3">
              La producción de los videojuegos, serie de anime y demás material
              para su distribución en occidente fue realizada en Estados Unidos
              por 4Kids Entertainment hasta noviembre de 2005, momento en que
              decidió no renovar su contrato con Pokémon USA (una subsidiaria de
              Pokémon Company). Actualmente esta supervisa todo lo referente al
              material de Pokémon en su distribución en occidente.
            </Box>
            <br></br>
            <br></br>
          </Box>
        </div>
        <br></br>
        <br></br>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
