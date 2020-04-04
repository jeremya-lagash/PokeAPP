import React, { Component } from "react";
import axios from "axios";
import List from "../components/List";
import AppNav from "../components/AppNav";
import Footer from "../components/Footer";
import { Box } from "@material-ui/core";
import PaginationLink from "../components/Pagination";

class PokeListContainer extends Component {
  state = {
    pokeData: [],
  };

  componentDidMount() {
    const count1 = 0;
    const count2 = 100;
    axios
      .get(
        "https://pokeapi.co/api/v2/pokemon?offset=" +
          count1 +
          "&limit=" +
          count2
      )
      .then((res) => {
        const pokeData = res.data.results;
        this.setState({ pokeData });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { pokeData } = this.state;
    return (
      <>
        <div className="Background-Img2">
          <AppNav />
          <Box className="CardOpacity">
            <List pokedata={pokeData} />
          </Box>
          <PaginationLink />
          <Footer />
        </div>
      </>
    );
  }
}

export default PokeListContainer;
