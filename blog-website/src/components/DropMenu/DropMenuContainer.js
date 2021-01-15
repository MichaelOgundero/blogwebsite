import React from "react";
import PropTypes from "prop-types";
import DropMenuContent from "../DropMenu/DropMenuContent";

const DropMenuContainer = ({ isOpen, isUser, handleDropMenu }) => {
  if (isOpen) {
    return (
      <div
        style={{
          display: "block",
          position: "absolute",
          top: "35px",
          left: "-135%",
          minWidth: "100px",
          background: "white",
          zIndex: 1,
          borderRadius: "10px",
        }}
      >
        <DropMenuContent isUser={isUser} handleDropMenu={handleDropMenu} />
      </div>
    );
  }

  return null;
};

DropMenuContainer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  isUser: PropTypes.bool.isRequired,
  handleDropMenu: PropTypes.func.isRequired
};

export default DropMenuContainer;
