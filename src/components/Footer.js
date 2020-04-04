import React from "react";
import { Typography, Box, Link } from "@material-ui/core";

const Footer = (classes) => {
  return (
    <Box className="Footer">
      <Link href="https://github.com/jeremya-lagash/PokeAPP">
        <Typography variant="h6" color="textPrimary">
          Copyright © Jeremy Andrades Parra - PokeApp
        </Typography>
      </Link>
    </Box>
  );
};

export default Footer;
