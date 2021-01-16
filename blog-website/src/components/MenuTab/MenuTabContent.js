import React from "react";
import PropTypes from "prop-types";
import Register from "../RegisterLogin/Register";
import Login from "../RegisterLogin/Login";

const MenuTabContent = ({ activeTab }) => {
  if (activeTab === "Register") {
    return <Register />;
  }
  if (activeTab === "Login") {
    return <Login />;
  } else {
    return null;
  }
};

MenuTabContent.propTypes = {
  activeTab: PropTypes.string.isRequired,
};

export default MenuTabContent;
