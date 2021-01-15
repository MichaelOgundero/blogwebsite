import React from "react";
import PropTypes from "prop-types";
import { Flex, Link } from "rebass";

const MenuTabs = ({ activeTab, handleActiveTab }) => {
   let isRegisterActive = "2px solid transparent"
   let isLoginActive = "2px solid transparent"
   if(activeTab === "Register"){
       isRegisterActive = "2px solid black"
       isLoginActive = "2px solid transparent"
   }
   if(activeTab === "Login"){
       isLoginActive = "2px solid black"
       isRegisterActive = "2px solid transparent"
   }

  return (
    <Flex flexDirection="row" justifyContent="space-evenly" pt={3} sx={{}}>
      <Link
        onClick={() => {
          handleActiveTab("Register");
        }}
        sx={{
          fontSize: "20px",
          fontWeight: "Bold",
          padding: "1px 6px",
          borderBottom: `${isRegisterActive}`,
          ":hover": {
            cursor: "pointer",
            borderBottom: "2px solid black",
          },
        }}
      >
        {"Register"}
      </Link>

      <Link
        onClick={() => {
          handleActiveTab("Login");
        }}
        sx={{
          fontSize: "20px",
          fontWeight: "Bold",
          padding: "1px 6px",
          borderBottom: `${isLoginActive}`,
          ":hover": {
            cursor: "pointer",
            borderBottom: "2px solid black",
          },
        }}
      >
        {"Login"}
      </Link>
    </Flex>
  );
};

MenuTabs.propTypes = {
  activeTab: PropTypes.string.isRequired,
  handleActiveTab: PropTypes.func.isRequired,
};

export default MenuTabs;
