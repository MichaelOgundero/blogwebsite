import React, { useState } from "react";
import PropTypes from "prop-types";
import { Flex, Box } from "rebass";
import { useMediaQuery } from "react-responsive";
import twitterIcon from "../../assets/icons/twitter-black-24p.svg";
import facebookIcon from "../../assets/icons/facebook-black-24p.svg";
import instagramIcon from "../../assets/icons/instagram-black-24p.svg";

const Footer = () => {
  const [paddingFooter, setPaddingFooter] = useState(0);

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
  return (
    <div>
      <Flex
        flexDirection="column"
        justifyContent="center"
        px={paddingFooter}
        py={5}
        sx={{
          position: "relative",
          background: "black",
          color: "white",
          textAlign: "center",
          marginTop: "80px",
        }}
      >
        {isLaptop && (
          <div>
            <Flex
              my={2}
              flexDirection="row"
              justifyContent="center"
              sx={{
              }}
            >
              <Box
                color="white"
                fontSize = {4}
              >
                {"Title"}
              </Box>
            </Flex>

            <Flex
              flexDirection="row"
              justifyContent="center"
              pt={4}
              sx={{
              }}
            >
              <Box
                width="50px"
                height="50px"
                m={2}
                sx={{
                  backgroundColor: "white",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  ":hover": {
                    cursor: "pointer",
                  },
                }}
              >
                <img alt="twitter icon" src={twitterIcon} />
              </Box>

              <Box
                width="50px"
                height="50px"
                m={2}
                sx={{
                  backgroundColor: "white",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  ":hover": {
                    cursor: "pointer",
                  },
                }}
              >
                <img alt="twitter icon" src={facebookIcon} />
              </Box>

              <Box
                width="50px"
                height="50px"
                m={2}
                sx={{
                  backgroundColor: "white",
                  borderRadius: "50%",
                  display: "flex",
                  padding: "12px",
                  justifyContent: "center",
                  ":hover": {
                    cursor: "pointer",
                  },
                }}
              >
                <img alt="twitter icon" src={instagramIcon} />
              </Box>
            </Flex>

            <Flex
              mt={3}
              flexDirection="row"
              justifyContent="center"
              sx={{
              }}
            >
              <Box
                color="white"
                fontSize = {2}
                px={0}
                sx={{
                  borderBottom: "1px solid transparent",
                  ":hover": {
                    cursor: "pointer",
                    borderBottom: "1px solid white",
                    fontWeight: "bold",
                  }
                }}
              >
                {"Contact"}
              </Box>

              <Box
                color="white"
                fontSize = {2}
                px={3}
              >
                <span>&#8226;</span>
              </Box>

              <Box
                color="white"
                fontSize = {2}
                px={0}
                sx={{
                  borderBottom: "1px solid transparent",
                  ":hover": {
                    cursor: "pointer",
                    borderBottom: "1px solid white",
                    fontWeight: "bold",
                  }
                }}
              >
                {"Info"}
              </Box>

              <Box
                color="white"
                fontSize = {2}
                px={3}
              >
                <span>&#8226;</span>
              </Box>

              <Box
                color="white"
                fontSize = {2}
                px={0}
                sx={{
                  borderBottom: "1px solid transparent",
                  ":hover": {
                    cursor: "pointer",
                    borderBottom: "1px solid white",
                    fontWeight: "bold",
                  }
                }}
              >
                {"Support"}
              </Box>
            </Flex>

            <Flex
              mt={4}
              flexDirection="row"
              justifyContent="center"
              sx={{
              }}
            >
              <Box
                color="gray"
                fontSize = {1}
              >
                Copyright &#169; 2020 Title, Inc.
              </Box>
            </Flex>
          </div>
        )}
        {isMobile && <div>{"mobile"}</div>}
      </Flex>
    </div>
  );
};

Footer.propTypes = {};

export default Footer;
