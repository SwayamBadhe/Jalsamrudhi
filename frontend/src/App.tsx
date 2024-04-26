import { useLocation } from 'react-router-dom';
import AboutUs from './components/aboutUs';
import HeroSection from './components/herosection';
import MediaGallery from './components/mediaGallery';
import Navbar from './components/nav-bar';
import AppRoutes from './routes/routes';
import { Grid } from '@mui/material';
import Footer from './components/footer';
import SocialWall from './components/social_wall';

function App() {
  const location = useLocation();

  const showHeroSection = location.pathname !== '/donate';
  return (
    <Grid>
      <div>
        <Navbar />
        {showHeroSection && <HeroSection />}
        <AppRoutes />
        {/* Rest of your app components */}
        <MediaGallery />
        < SocialWall />
        <AboutUs />
        <Footer />
      </div>
    </Grid>
  );
}

export default App;
