import React from "react"
import PropTypes from "prop-types"
import MenuTabs from "../MenuTab/MenuTabs"
import MenuTabContent from "../MenuTab/MenuTabContent"

const MenuTabContainer =({activeTab, handleActiveTab})=>{
    return(
        <div>
            <MenuTabs activeTab={activeTab} handleActiveTab={handleActiveTab}/>
            <MenuTabContent activeTab={activeTab}/>
        </div>
    )
}

MenuTabContainer.propTypes = {
    activeTab: PropTypes.string.isRequired,
    handleActiveTab: PropTypes.string.isRequired
}

export default MenuTabContainer