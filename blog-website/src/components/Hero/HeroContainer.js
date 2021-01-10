import React from "react";
import PropTypes from "prop-types";
import { Box } from "rebass";
import heroImage from "../../assets/images/hero-image.jpg";

const HeroContainer = () => {
  return (
    <Box
      color="white"
      /* alignItems="flex-start"*/
      height={`100vh`}
      sx={{
        overflow: "hidden",
        backgroundImage: `linear-gradient(rgba(0,0,0,0.65),rgba(0,0,0,0.65)),url(${heroImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        overflow: "hidden",
        width: "100%",
      }}
    ></Box>
  );
};

HeroContainer.propTypes = {};

export default HeroContainer;
