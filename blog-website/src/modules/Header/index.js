import React, { useState } from "react";
import PropTypes from "prop-types";
import { Flex, Heading, Box, Link, Button } from "rebass";
import { Input } from "@rebass/forms";
import { loggedOutLinks, loggedInLinks } from "./links";
import { useMediaQuery } from "react-responsive";
import MenuContainer from "../../components/Menu/MenuContainer";
import searchIcon from "../../assets/icons/search-white-18dp.svg";
import { ReactComponent as TwitterIcon } from "../../assets/icons/twitter.svg";
import { ReactComponent as FacebookIcon } from "../../assets/icons/facebook.svg";
import theme from "../../components/Layout/theme";

const Header = ({ isUser }) => {
  const menuLinks = isUser ? loggedInLinks : loggedOutLinks;
  const [isOpen, setIsOpen] = useState(false);
  const [paddingHeader, setPaddingHeader] = useState(6);
  const [navBarColor, setNavBarColor] = useState("transparent");

  const handlePaddingHeader = (matches) => {
    if (matches) {
      setPaddingHeader(6);
    } else {
      setPaddingHeader(4);
    }
  };

  const isMobile = useMediaQuery({ maxDeviceWidth: 768 });
  const isLaptop = useMediaQuery(
    { minDeviceWidth: 769 },
    undefined,
    handlePaddingHeader
  );

  return (
    <div>
      <Flex
        px={paddingHeader}
        py={4}
        color="white"
        alignItems="flex-start"
        sx={{
          backgroundColor: `${navBarColor}`,
          position: "fixed",
          top: "0",
          width: "100%",
        }}
      >
        <div style={{
          width: "100%",
          display:"inline-block",
        }}>
          <Heading
            fontFamily={theme.fonts.fontFamily}
            fontSize={3}
            fontWeight="bold"
            display="inline-block"
            textAlign="left"
          >
            Home
          </Heading>


          {isLaptop && (
            <div style={{display: "inline-block", float: "right", textAlign:"right"}}>
              <div style={{ width: "30%", paddingRight: "1vw", display: "inline-block" }}>
                <Input
                  id="searchBox"
                  placeholder="Search..."
                  fontSize={1}
                  sx={{
                    outline: "none",
                    width: "100%",
                    padding: "1px",
                    borderBottom: "2px solid white",
                    borderTop: "none",
                    borderLeft: "none",
                    borderRight: "none",
                    backgroundImage: `url(${searchIcon})`,
                    backgroundRepeat: "no-repeat",
                    paddingLeft: "20px",
                  }}
                />
              </div>
              {menuLinks.right.map((link) => (
                <Link
                  key={link.id}
                  id={link.id}
                  fontSize={2}
                  px={3}
                  sx={{
                    fontWeight: "bold",
                    display: "inline-block",
                    cursor: "pointer",
                    borderBottom: "3px solid transparent",
                    ":hover": {
                      borderBottom: "3px solid white",
                    },
                  }}
                >
                  {link.id}
                </Link>
              ))}
              
              <div style={{display:"inline-block", paddingLeft: "1%"}}>
              <Button
                sx={{
                  textDecoration: "none",
                  fontSize: "14px",
                  display: "inline-block",
                  padding: "8px 16px",
                  fontWeight: "bold",
                  color: "white",
                  borderRadius : "40px",
                  backgroundColor: "transparent",
                  ":hover": {
                    cursor: "pointer",
                    color: "black",
                    backgroundColor: "white"
                  }
                }}
              >
                Login
              </Button>
              </div>
              <div style={{display:"inline-block"}}>
              <Button
                sx={{
                  textDecoration: "none",
                  fontSize: "14px",
                  display: "inline-block",
                  padding: "8px 16px",
                  fontWeight: "bold",
                  color: "white",
                  borderRadius : "40px",
                  backgroundColor: "transparent",
                  ":hover": {
                    cursor: "pointer",
                    color: "black",
                    backgroundColor: "white"
                  }
                }}
              >
                Register
              </Button>
              </div>
              
            </div>
          )}

          {isMobile && (
            <div style={{display:"inline-block", float:"right", marginTop:"1px"}}>
              <Box
                sx={{ cursor: "pointer", display:"inline-block", float:"right" }}
                onClick={() => {
                  setIsOpen(!isOpen);
                  if (isOpen !== true) {
                    setNavBarColor("black");
                  } else {
                    setNavBarColor("transparent");
                  }
                }}
              >
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 18 18"
                    fill="white"
                  >
                    <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 18 18"
                    fill="white"
                  >
                    <path d="M2 13.5h14V12H2v1.5zm0-4h14V8H2v1.5zM2 4v1.5h14V4H2z" />
                  </svg>
                )}
              </Box>
            </div>
          )}
        </div>
      </Flex>
      <MenuContainer isOpen={isOpen} menuLinks={menuLinks} />
    </div>
  );
};

Header.propTypes = {
  isUser: PropTypes.bool.isRequired,
};

export default Header;
