import React from 'react'
import Header from '../../Header/Header'
import HeroSection from './heroSection/HeroSection'
import CreateYourOwn from './createOwn/CreateYourOwn'
import EnhanceArtwork from './enhanceArtwork/EnhanceArtwork'
import ImageCreated from './imageCreated/ImageCreated'
import ImagesEnhance from './imagesEnhance/ImagesEnhance'

const Home = () => {
  return (
    <>
    <Header/>
    <HeroSection />
    <CreateYourOwn />
    <EnhanceArtwork />
    <ImageCreated />
    <ImagesEnhance />
    </>
  )
}

export default Home
