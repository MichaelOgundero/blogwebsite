import React from "react";
//import PropTypes from "prop-types";
import Layout from "../components/Layout";
import HeroContainer from "../components/Hero/HeroContainer"
import GridContainer from "../components/Grid/GridContainer"

const App = () => {
  return (
    <Layout>
      <HeroContainer />
      <GridContainer />

    </Layout>
  )
};

export default App;
