import React from "react";
import PropTypes from "prop-types";
import DropMenuContent from "../DropMenu/DropMenuContent";

const DropMenuContainer = ({ isOpen, isUser,  }) => {
  if (isOpen) {
    return (
      <div
        style={{
          display: "block",
          position: "absolute",
          left: "-135%",
          minWidth: "100px",
          background: "white",
          zIndex: 1,
          borderRadius: "10px",
          boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
        }}
      >
        <DropMenuContent isUser={isUser}  />
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
