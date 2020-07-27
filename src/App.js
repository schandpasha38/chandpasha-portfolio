import React from 'react';
import Header from './Components/Header/Header'
import HomeBanner from './Components/HomeBanner/HomeBanner';
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <title>Chand Pasha | Front-End Developer in Bangalore</title>
        <meta name="description" content="Chand pasha with total of 7 years experiance" />
      </Helmet>
      <Header />
      <HomeBanner />
    </>
  );
}

export default App;