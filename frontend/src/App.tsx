import { Grid } from '@mui/material';
import { useLocation } from 'react-router-dom';
import AboutUs from './components/aboutUs';
import Footer from './components/footer';
import HeroSection from './components/herosection';
import MediaGallery from './components/mediaGallery';
import Navbar from './components/nav-bar';
import AppRoutes from './routes/routes';

function App() {
  const location = useLocation();

  const showHeroSection = location.pathname !== '/donate';
  const showSocialWall = location.pathname !== '/social_wall';
  return (
    <Grid sx={{
      marginLeft:"10px",
      marginRight:"10px",
    }}>
      <div>
        <Navbar />
        <Grid sx={{
          // marginLeft:"10px",
          // marginRight:"10px",
        }}>

        <div style={{ height: '100vh', overflow: 'hidden' }}>
          {showHeroSection && <HeroSection />}
        </div>
        <AppRoutes />
        {/* Rest of your app components */}
        {showSocialWall && <SocialWall />}
        <MediaGallery />
        <AboutUs />
        <Footer />
        </Grid>
      </div>
    </Grid>
  );
}

export default App;
