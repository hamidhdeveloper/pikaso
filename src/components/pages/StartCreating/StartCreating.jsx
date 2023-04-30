import React from "react";
import StartCreatingHero from "./HeroSection/StartCreatingHero";
import ChooseImageSize from "./ChooseImageSize/ChooseImageSize";
import Header from "../../Header/Header";
const StartCreating = () => {
  return (
    <>
      <Header />
      <StartCreatingHero />
      <ChooseImageSize />
    </>
  );
};

export default StartCreating;
