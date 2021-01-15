import React, {useState} from "react";
import PropTypes from "prop-types";
import { Input } from "@rebass/forms";
import registerIcon from "../../assets/icons/person_add-black-18dp.svg";
import loginIcon from "../../assets/icons/login-black-18dp.svg";
import ModalContaier from "../../components/Modal/ModalContainer"

const DropMenuContent = ({ isUser }) => {
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState("")

  const handleModalClose = () => {
    setShowModal(!showModal);
  }

  const handleActiveTab = (tab) => {
    setActiveTab(tab);
  }

  if (isUser) {
    return (
      <div
        style={{
          display: "flex",
          border: "1px solid red",
          textAlign: "center",
          color: "black",
          flexDirection: "column",
        }}
      >
        <a>Link 1</a>
        <a>Link 2</a>
      </div>
    );
  } else {
    return (
      <div
        style={{
          display: "flex",
          textAlign: "center",
          flexDirection: "column",
          color: "black",
          paddingTop: "4px",
          paddingBottom: "4px",
        }}
      >
        <div
          style={{
            display: "inline-block",
            cursor: "pointer",
            padding: "3px 8px",
          }}
        >
          <Input
            onClick={()=>{setShowModal(true); setActiveTab("Register")}}
            placeholder="Register"
            sx={{
              color: "transparent",
              textAlign: "left",
              width: "100%",
              padding: "0",
              textDecoration: "none",
              outline: "none",
              borderBottom: "1px solid transparent",
              borderTop: "none",
              borderLeft: "none",
              borderRight: "none",
              backgroundImage: `url(${registerIcon})`,
              backgroundRepeat: "no-repeat",
              paddingLeft: "24px",
              display: "inline-block",
              ":hover": {
                cursor: "pointer",
                borderBottom: "1px solid black",
              },
              "::placeholder": {
                color: "black",
                opacity: "1",
                fontSize: "15px",
              },
            }}
          />
        </div>

        <div
          style={{
            display: "inline-block",
            cursor: "pointer",
            padding: "3px 8px",
          }}
        >
          <Input
            onClick={()=>{setShowModal(true); setActiveTab("Login")}}
            placeholder="Login"
            sx={{
              color: "transparent",
              textAlign: "left",
              width: "100%",
              padding: "0",
              textDecoration: "none",
              outline: "none",
              borderBottom: "1px solid transparent",
              borderTop: "none",
              borderLeft: "none",
              borderRight: "none",
              backgroundImage: `url(${loginIcon})`,
              backgroundRepeat: "no-repeat",
              paddingLeft: "24px",
              display: "inline-block",
              ":hover": {
                cursor: "pointer",
                borderBottom: "1px solid black",
              },
              "::placeholder": {
                color: "black",
                opacity: "1",
                fontSize: "15px",
                cursor: "pointer",
              },
            }}
          />
        </div>
        <ModalContaier showModal={showModal} handleClose={handleModalClose} activeTab={activeTab} handleActiveTab={handleActiveTab}/>
      </div>
    );
  }
};

DropMenuContent.propTypes = {
  isUser: PropTypes.bool.isRequired,
};

export default DropMenuContent;
