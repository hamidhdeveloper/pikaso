import './App.css';
import MyNavbar from './components/Navbar/MyNavbar';
import CreateYourOwn from './components/pages/Home/createOwn/CreateYourOwn';
import EnhanceArtwork from './components/pages/Home/enhanceArtwork/EnhanceArtwork';
import HeroSection from './components/pages/Home/heroSection/HeroSection';
import ImageCreated from './components/pages/Home/imageCreated/ImageCreated';
import ImagesEnhance from './components/pages/Home/imagesEnhance/ImagesEnhance';

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <HeroSection />
      <CreateYourOwn />
      <EnhanceArtwork />
      <ImageCreated />
      <ImagesEnhance />
    </div>
  );
}

export default App;
