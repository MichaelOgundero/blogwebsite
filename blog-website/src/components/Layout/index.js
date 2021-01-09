import React from 'react';
import Proptypes from 'prop-types';
import {Header, Footer} from "../../modules";
import {ThemeProvider} from "@emotion/react";
import theme from "./theme"

const Layout = ({children}) => {
    return(
        <ThemeProvider theme={theme}>
            <Header isUser={false}/>
            <main>{children}</main>
            <Footer/>
        </ThemeProvider>
    )
}

Layout.propTypes = {
    children: Proptypes.any
}

export default Layout;