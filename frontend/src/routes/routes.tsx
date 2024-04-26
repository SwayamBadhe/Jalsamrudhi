import { Route, Routes } from 'react-router-dom';
import DonationPage from '../components/donate';
import About from '../components/about';
import Dashboard from '../components/dashboard';
import SocialWall from '../components/social_wall';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Define the route for the donation page */}
      <Route path="/donate" element={<DonationPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/social_wall" element={<SocialWall />} />
      {/* Add more routes as needed */}
    </Routes>
  );
};
export default AppRoutes;
