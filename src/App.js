import React from 'react';
import Header from './Components/Header/Header'
import HomeBanner from './Components/HomeBanner/HomeBanner';
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <title>Chand Pasha | Front-End Developer in Bangalore</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <Header />
      <HomeBanner />
    </>
  );
}

export default App;