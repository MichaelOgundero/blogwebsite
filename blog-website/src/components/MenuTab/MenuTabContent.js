import React from "react"
import PropTypes from "prop-types"
import {Flex} from  "rebass"

const MenuTabContent = ({activeTab}) => {
    if(activeTab === "Register"){
        return(
            <Flex
                flexDirection = "column"
                my={2}
                sx={{
                    border: "1px solid red",
                    width: "100%",
                    height: "100%"
                }}
            >
                <div>
                    Register
                </div>
                <div>
                    register
                </div>
            </Flex>
        )
    }
    if(activeTab === "Login"){
        return(
            <Flex
                flexDirection = "column"
                my={2}
                sx={{
                border: "1px solid red",
                width: "100%",
                height: "100%"
            }}
            >
                <div>
                    Login
                </div>
                <div>
                    login
                </div>
            </Flex>
        )
    }else{
        return null;
        
    }
}


MenuTabContent.propTypes = {
    activeTab: PropTypes.string.isRequired,
}

export default MenuTabContent;