import { Grid } from '@mui/material';
import { useLocation } from 'react-router-dom';
import AboutUs from './components/aboutUs';
import Footer from './components/footer';
import HeroSection from './components/herosection';
import MediaGallery from './components/mediaGallery';
import Navbar from './components/nav-bar';
import AppRoutes from './routes/routes';
import SocialWall from './components/social_wall';
import Dashboard from './components/dashboard';


function App() {
  const location = useLocation();

  const showHeroSection = location.pathname !== '/about';
  const showSocialWall = location.pathname !== '/social_wall';
  return (
    <Grid sx={{
      marginLeft:"10px",
      marginRight:"10px",
      
    }}>
      <div>
        <Navbar />
        <Grid >
        <div style={{ height: '100vh', overflow: 'hidden' }}>
          {showHeroSection && <HeroSection />}
        <HeroSection />
        </div>
        <Dashboard />
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
