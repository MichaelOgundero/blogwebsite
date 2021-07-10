import React, {useState} from "react";
//import PropTypes from "prop-types";
import { Box, Text, Button, Image } from "rebass";
import { GridData } from "../Grid/GridData";
import DownArrow from "../../assets/icons/down-arrow.svg"


const HeroContainer = ({gridEl}) => {

  const handleDownArrowClick = () => {
    if(gridEl.current){
      gridEl.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest"
      })
    }
  }

  return (
    <Box
      color="white"
      height={`100vh`}
      sx={{
        overflow: "hidden",
        backgroundImage: `linear-gradient(rgba(0,0,0,0.65),rgba(0,0,0,0.65)),url(${GridData.heroArray[0].image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        overflow: "hidden",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        position: "relative",
        zIndex: "1"
      }}
    >
      <Text
          fontFamily="Raleway"
          fontSize="15px"
          color="white"
          sx={{
            textTransform: "uppercase"
          }}
      >
        Latest Article
      </Text>
      <Text
          fontFamily="Merriweather"
          fontSize="75px"
          color="white"
          py={2}
          sx={{
            textTransform: "capitalize"
          }}
      >
        {GridData.heroArray[0].title}
      </Text>
      <Button
          my={4}
          sx={{
            fontFamily: "Raleway",
            textDecoration: "none",
            outline: "none",
            textTransform: "uppercase",
            fontSize: "20px",
            display: "inline-block",
            padding: "16px 32px",
            color: "white",
            borderRadius: "40px",
            backgroundColor: "transparent",
            border: "2px solid white",
            ":hover": {
              cursor: "pointer",
              backgroundColor: "white",
              border: "2px solid white",
              color: "black",
            },
          }}
        >
          Read More
        </Button>

        <Image onClick={()=>{handleDownArrowClick()}} src={DownArrow} sx={{
          
          display: "block",
          position: "absolute",
          bottom: "15%",
          width: "30px",
          height: "30px",
          zIndex: 2,
          ":hover":{
            cursor: "pointer",
            transform: "translate(0, 15px)"
          }
          }} />
      
    </Box>
  );
};

//HeroContainer.propTypes = {};

export default HeroContainer;
