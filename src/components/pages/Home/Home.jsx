import React from 'react'
import HeroSection from './heroSection/HeroSection'
import CreateYourOwn from './createOwn/CreateYourOwn'
import EnhanceArtwork from './enhanceArtwork/EnhanceArtwork'
// import ImageCreated from './imageCreated/ImageCreated'
// import ImagesEnhance from './imagesEnhance/ImagesEnhance'

const Home = () => {
  return (
    <>
    <HeroSection />
    <CreateYourOwn />
    <EnhanceArtwork />
    {/* <ImageCreated /> */}
    {/* <ImagesEnhance /> */}
    </>
  )
}

export default Home
