import React, { useState } from 'react';
import {
  Grid,
  TextField,
  Button,
  Typography,
  Switch,
  FormControlLabel,
} from '@mui/material';
import { Payment } from './Payment/payment';

const DonationPage = () => {
  // Define state variables for the form inputs
  const [price, setPrice] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [requireTaxExemption, setRequireTaxExemption] = useState(false);
  const [panDetails, setPanDetails] = useState('');

  // Handle the form submission
  const handleSubmit = () => {
    // Implement your proceed button logic here
    const priceNumber: number = parseFloat(price);
    Payment(priceNumber, name, email, parseInt(mobileNo));
    console.log({
      price,
      name,
      email,
      mobileNo,
      requireTaxExemption,
      panDetails,
    });
    alert('Form submitted!');
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4">Donation </Typography>
      <Grid container spacing={2} style={{ marginTop: '20px' }}>
        {/* Input for price */}
        <Grid item xs={12}>
          <TextField
            label="Enter ammount you want to Donate "
            type="number"
            fullWidth
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </Grid>

        {/* Input for name */}
        <Grid item xs={12}>
          <TextField
            label="Name as per Pan"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Grid>

        {/* Input for email */}
        <Grid item xs={12}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Grid>

        {/* Input for mobile number */}
        <Grid item xs={12}>
          <TextField
            label="Mobile No (+91)"
            type="tel"
            fullWidth
            value={mobileNo}
            onChange={(e) => setMobileNo(e.target.value)}
            inputProps={{ pattern: '\\+91[0-9]{10}' }} // Regex pattern to validate mobile number format
            required
          />
        </Grid>

        {/* Toggle button for 80G Tax Exemption Certificate */}
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Switch
                checked={requireTaxExemption}
                onChange={() => setRequireTaxExemption(!requireTaxExemption)}
                color="primary"
              />
            }
            label="Require 80G Tax Exemption Certificate?"
          />
        </Grid>

        {/* Conditional input for PAN details */}
        {requireTaxExemption && (
          <Grid item xs={12}>
            <TextField
              label="PAN Details"
              fullWidth
              value={panDetails}
              onChange={(e) => setPanDetails(e.target.value)}
              required
            />
          </Grid>
        )}

        {/* Proceed button */}
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            fullWidth
          >
            Proceed
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default DonationPage;
