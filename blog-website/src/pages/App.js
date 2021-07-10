import React, {useRef} from "react";
//import PropTypes from "prop-types";
import Layout from "../components/Layout";
import HeroContainer from "../components/Hero/HeroContainer"
import GridContainer from "../components/Grid/GridContainer"


const App = () => {
  const gridEl = useRef(null)

  return (
    <Layout>
      <HeroContainer gridEl={gridEl}/>
      <GridContainer gridEl = {gridEl} />

    </Layout>
  )
};

export default App;
