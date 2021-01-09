import React from "react";
import { Link, Box } from "rebass";
import PropTypes from "prop-types";
import { Input } from "@rebass/forms";
import searchIcon from "../../assets/icons/search-black-18dp.svg";

const MenuContent = ({ menuLinks }) => {
  return (
    <>
      {menuLinks.right.map((menuLink) => (
        <Link
          key={menuLink.id}
          id={menuLink.id}
          py={2}
          sx={{
            width: "100%",
            cursor: "pointer",
          }}
        >
          {menuLink.id}
        </Link>
      ))}
      <div style={{ width: "100%", paddingTop:"8px" }}>
        <Input
          id="searchBox"
          placeholder="Search..."
          fontSize={1}
          sx={{
            outline: "none",
            width: "100%",
            padding: "1px",
            borderBottom: "2px solid black",
            borderTop: "none",
            borderLeft: "none",
            borderRight: "none",
            backgroundImage: `url(${searchIcon})`,
            backgroundRepeat: "no-repeat",
            paddingLeft: "20px",
          }}
        />
      </div>
    </>
  );
};

MenuContent.propTypes = {
  menuLinks: PropTypes.object.isRequired,
};
export default MenuContent;
