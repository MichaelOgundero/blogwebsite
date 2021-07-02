import React from "react";
import PropTypes from "prop-types";
import { Box } from "rebass";
import MenuTabContainer from "../MenuTab/MenuTabContainer";

const ModalContainer = ({
  showModal,
  handleClose,
  activeTab,
  handleActiveTab,
}) => {



  if (showModal) {
    return (
      <Box
        style={{
          display: "block",
          position: "fixed",
          zIndex: "1",
          paddingTop: "100px",
          left: "0",
          top: "0",
          width: "100%",
          height: "100%",
          overflow: "auto",
          backgroundColor: `rgb(0,0,0,0.4)`,
        }}
      >
        <Box
          style={{
            backgroundColor: "#fefefe",
            margin: "auto",
            padding: "8px",
            borderRadius: "16px",
            width: "350px",
            height: "500px",

          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="black"
            width="18px"
            height="18px"
            style={{
              cursor: "pointer",
            }}
            onClick={() => {
              handleClose();
            }}
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
          </svg>

          <MenuTabContainer
            activeTab={activeTab}
            handleActiveTab={handleActiveTab}
          />
        </Box>
      </Box>

    );
  } else {
    return null;
  }
};

ModalContainer.propTypes = {
  showModal: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  activeTab: PropTypes.string.isRequired,
  handleActiveTab: PropTypes.func.isRequired,
};

export default ModalContainer;
