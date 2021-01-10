import React from "react";
import { Flex } from "rebass";
import PropTypes from "prop-types";
import MenuContent from "./MenuContent";
import { useMediaQuery } from "react-responsive";

const MenuContainer = ({ isOpen, menuLinks }) => {
  const isMobile = useMediaQuery({ maxDeviceWidth: 768 });

  if (isOpen) {
    return (
      <div>
        {isMobile && (
          <>
            <Flex
              flexDirection="column"
              px={4}
              py={6}
              sx={{
                width: "100%",
              }}
            >
              <MenuContent menuLinks={menuLinks} />
            </Flex>
          </>
        )}
      </div>
    );
  }
  return null;
};

MenuContainer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  menuLinks: PropTypes.object.isRequired,
};
export default MenuContainer;
