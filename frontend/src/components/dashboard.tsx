import React, { useState, useEffect } from 'react';
import { Grid, Typography, Card, CardContent, Box } from '@mui/material';

const Dashboard = () => {
  // Define state variables for the metrics
  const [donationsToday, setDonationsToday] = useState(0);
  const [deSiltingProgressToday, setDeSiltingProgressToday] = useState(0);
  const [totalDeSiltingProgress, setTotalDeSiltingProgress] = useState(0);
  const [trucksCarriedOut, setTrucksCarriedOut] = useState(0);
  const [donationsFor80G, setDonationsFor80G] = useState(0);
  const [farmersBenefitted, setFarmersBenefitted] = useState(0);
  const [areaCovered, setAreaCovered] = useState(0);

  // Fetch data from the server when the component mounts
  useEffect(() => {
    // Fetch metrics data from server
    const fetchData = async () => {
      try {
        // Fetch donations today
        const donationsTodayResponse = await fetch(
          'YOUR_SERVER_URL/donationsToday'
        );
        const donationsTodayData = await donationsTodayResponse.json();
        setDonationsToday(donationsTodayData);

        // Fetch de-silting progress today
        const deSiltingProgressTodayResponse = await fetch(
          'YOUR_SERVER_URL/deSiltingProgressToday'
        );
        const deSiltingProgressTodayData =
          await deSiltingProgressTodayResponse.json();
        setDeSiltingProgressToday(deSiltingProgressTodayData);

        // Fetch total de-silting progress
        const totalDeSiltingProgressResponse = await fetch(
          'YOUR_SERVER_URL/totalDeSiltingProgress'
        );
        const totalDeSiltingProgressData =
          await totalDeSiltingProgressResponse.json();
        setTotalDeSiltingProgress(totalDeSiltingProgressData);

        // Fetch trucks carried out
        const trucksCarriedOutResponse = await fetch(
          'YOUR_SERVER_URL/trucksCarriedOut'
        );
        const trucksCarriedOutData = await trucksCarriedOutResponse.json();
        setTrucksCarriedOut(trucksCarriedOutData);

        // Fetch donations for 80G tax exemption
        const donationsFor80GResponse = await fetch(
          'YOUR_SERVER_URL/donationsFor80G'
        );
        const donationsFor80GData = await donationsFor80GResponse.json();
        setDonationsFor80G(donationsFor80GData);

        // Fetch number of farmers benefitted
        const farmersBenefittedResponse = await fetch(
          'YOUR_SERVER_URL/farmersBenefitted'
        );
        const farmersBenefittedData = await farmersBenefittedResponse.json();
        setFarmersBenefitted(farmersBenefittedData);

        // Fetch area covered
        const areaCoveredResponse = await fetch('YOUR_SERVER_URL/areaCovered');
        const areaCoveredData = await areaCoveredResponse.json();
        setAreaCovered(areaCoveredData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box sx={{
      height: '100vh',
        width: '100vw',
    }}>
      <Typography variant="h4">Dashboard</Typography>
      <Grid container spacing={3} style={{ marginTop: '20px' }}>
        {/* Donations today */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Donations Today</Typography>
              <Typography variant="body1">{donationsToday}</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* De-silting progress today */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">De-silting Progress Today</Typography>
              <Typography variant="body1">{deSiltingProgressToday}</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Total de-silting progress */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Total De-silting Progress</Typography>
              <Typography variant="body1">{totalDeSiltingProgress}</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Trucks carried out */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Trucks Carried Out</Typography>
              <Typography variant="body1">{trucksCarriedOut}</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Donations for 80G tax exemption */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">
                Donations for 80G Tax Exemption
              </Typography>
              <Typography variant="body1">{donationsFor80G}</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Farmers benefitted */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Farmers Benefitted</Typography>
              <Typography variant="body1">{farmersBenefitted}</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Area covered */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Area Covered</Typography>
              <Typography variant="body1">{areaCovered}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
