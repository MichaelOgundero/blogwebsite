import React from "react";
import { Flex, Text, Button } from "rebass";
import { Input } from "@rebass/forms";
import userAvatar from "../../assets/icons/user-icon.svg";
import userIcon from "../../assets/icons/person-black-24dp.svg";
import passwordIcon from "../../assets/icons/vpn_key-black-24dp.svg";

const Login = () => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      my={3}
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <div>
        <img width="128px" height="128px" src={userAvatar} alt="user icon" />
      </div>

      <div
        style={{
          paddingTop: "40px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Input
          id="Username"
          placeholder="Username"
          autoFocus={true}
          fontSize={2}
          sx={{
            outline: "none",
            width: "75%",
            padding: "4px",
            borderTop: "none",
            borderLeft: "none",
            borderRight: "none",
            borderBottom: "2px solid black",
            backgroundImage: `url(${userIcon})`,
            backgroundRepeat: "no-repeat",
            paddingLeft: "32px",
          }}
        />
      </div>

      <div
        style={{
          paddingTop: "24px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Input
          id="Password"
          placeholder="Password"
          fontSize={2}
          type="password"
          sx={{
            outline: "none",
            width: "75%",
            padding: "4px",
            borderTop: "none",
            borderLeft: "none",
            borderRight: "none",
            borderBottom: "2px solid black",
            backgroundImage: `url(${passwordIcon})`,
            backgroundRepeat: "no-repeat",
            paddingLeft: "32px",
          }}
        />
      </div>

      <div
        style={{
          paddingTop: "12px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Text
          fontSize={1}
          sx={{
            borderBottom: "1px solid transparent",
            ":hover": {
              cursor: "pointer",
              borderBottom: "1px solid black",
              fontWeight: "bold",
            },
          }}
        >
          {"Forgot password?"}
        </Text>
      </div>

      <div
        style={{
          paddingTop: "32px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          sx={{
            textDecoration: "none",
            outline: "none",
            fontSize: "14px",
            display: "inline-block",
            width: "60%",
            padding: "8px 16px",
            fontWeight: "bold",
            color: "black",
            borderRadius: "40px",
            backgroundColor: "white",
            border: "2px solid black",
            ":hover": {
              cursor: "pointer",
              backgroundColor: "black",
              border: "2px solid black",
              color: "white",
            },
          }}
        >
          Login
        </Button>
      </div>
    </Flex>
  );
};


export default Login;
