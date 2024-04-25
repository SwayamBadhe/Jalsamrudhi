import AboutUs from './components/aboutUs';
import HeroSection from './components/herosection';
import MediaGallery from './components/mediaGallery';
import Navbar from './components/nav-bar';

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      {/* Rest of your app components */}
      <MediaGallery />
      <AboutUs />
    </div>
  );
}

export default App;
