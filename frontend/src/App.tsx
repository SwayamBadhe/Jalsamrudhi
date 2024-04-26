import { useLocation } from 'react-router-dom';
import AboutUs from './components/aboutUs';
import HeroSection from './components/herosection';
import MediaGallery from './components/mediaGallery';
import Navbar from './components/nav-bar';
import AppRoutes from './routes/routes';
import { Grid } from '@mui/material';
import Footer from './components/footer';
import Payment from './components/Payment/payment';
import SocialWall from './components/social_wall';

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
        {/* <SocialWall /> */}
        <AboutUs />
        <Payment />
        <Footer />
        </Grid>
      </div>
    </Grid>
  );
}

export default App;
