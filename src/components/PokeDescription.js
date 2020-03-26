import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import PokeCard from "./PokeCard";
import { withStyles } from "@material-ui/core/styles";

function PokeDescription({ pokeImage, name, description, classes, color }) {
  return (
    <>
      <Grid container className={classes.centerContainer}>
        <Grid item>
          <PokeCard image={pokeImage} name={name} to="#" color={color} />
        </Grid>
        <Grid item>
          <div className={classes.descriptionContainer}>
            <Paper className={classes.descriptionBox}>
              <Typography
                className={classes.descriptionText}
                variant="body1"
                component="p"
              >
                {description}
              </Typography>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default withStyles({
  centerContainer: {
    margin: "0 auto",
    width: "70% !important"
  },
  descriptionContainer: {
    padding: "2em"
  },
  descriptionBox: {
    padding: "2em",
    height: "auto",
    backgroundColor: "#1BDAB4"
  },
  descriptionText: {
    fontSize: "1em",
    textAlign: "justify",
    fontFamily: "Verdana"
  },
  imageFull: {
    minHeight: "300px",
    minWidth: "300px"
  }
})(PokeDescription);
