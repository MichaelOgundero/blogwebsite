import React, {useState} from "react";
import PropTypes from "prop-types"
import {Flex, Box} from "rebass"
import { useMediaQuery } from "react-responsive";


const Footer = () => {

  const [paddingFooter, setPaddingFooter] = useState(0)

  const handlePaddingFooter = (matches) => {
    if (matches) {
      setPaddingFooter(6);
    } else {
      setPaddingFooter(4);
    }
  };

  const isMobile = useMediaQuery({ maxDeviceWidth: 768 });
  const isLaptop = useMediaQuery(
    { minDeviceWidth: 769 },
    undefined,
    handlePaddingFooter
  );
    return(
      <div>
        <Flex
          px = {paddingFooter}
          py={5}
          sx={{
            position: "relative",
            width: "100%",
            background: "black",
            color: "white",
            textAlign: "center",
          }}
        >
          {"Footer"}
        </Flex>

      </div>

    );
  };

Footer.propTypes = {

}
  
export default Footer;
  