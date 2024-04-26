// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import styled from '@emotion/styled';
// import { Link } from 'react-router-dom';
// import { Grid } from '@mui/material';

// // Use styled for custom styles
// const StyledAppBar = styled(AppBar)({
//   flexGrow: 1,
// });

// const StyledTitle = styled(Typography)({
//   flexGrow: 1,
// });

// const Navbar = () => (

//   <StyledAppBar
//     position="fixed"
//     style={{background: '#FFF',}}
//   >
//     <Toolbar>
//     <img
//             src="main-icon.jpg" // Replace this with your image URL
//             alt="Logo" // Provide an alt text for accessibility
//             style={{
//                 width: '50px',
//                 height: '50px',
//                 borderRadius: '50%',
//                 marginRight: '10px',
//             }}
//         />
//       <StyledTitle variant="h6" sx={{color: '#292F36',
//         fontFamily: '"DM Serif Display"',
//         fontSize: '40px',
//         fontStyle: 'normal',
//         fontWeight: '400',
//         lineHeight: '125%',
//         }}>JALSAMRUDHI
//       </StyledTitle>
//       <Link to="/about">
//         <Button
//           color="inherit"
//           sx={{
//             color: '#FF5C01',
//             textAlign: 'center',
//             fontFamily: 'Jost',
//             fontSize: '20px',
//             fontStyle: 'normal',
//             fontWeight: '500',
//             lineHeight: '125%', /* 25px */
//           }
//           }
//         >
//           About
//         </Button>
//       </Link>
//       <Grid sx={{
//         color: '#292F36',
//         fontFamily: 'Jost',
//         fontSize: '20px',
//         fontStyle: 'normal',
//         fontWeight: '500',
//         lineHeight: '125%',
//       }
//       }>

//       <Link to="/dashboard">
//         <Button
//           color="inherit"
//           >
//           Dashboard
//         </Button>
//       </Link>
//       <Button
//         color="inherit"
//         >
//         What we are
//       </Button>
//       <Button
//         color="inherit"
//         >
//         JSN
//       </Button>
//       <Link to="/social_wall">
//         <Button
//           color="inherit"
//           >
//           Social Wall
//         </Button>
//       </Link>
//       </Grid>
//       <Link to="/donate">
//         <Button
//           color="inherit"
//           sx={{
//             display: 'flex',
//             width: '141px',
//             height: '44px',
//             padding: '26px 37px',
//             flexDirection: 'column',
//             justifyContent: 'center',
//             alignItems: 'center',
//             gap: '10px',
//             flexShrink: 0,
//             borderRadius: '18px',
//             background: '#FF5C01',
//             boxShadow: '0px 10px 20px 0px #1F2022',
//             marginLeft:'2%',
//           }}
//           >
//           Donate
//         </Button>
//       </Link>
//     </Toolbar>
//   </StyledAppBar>
// );

// export default Navbar;
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';
import { Link, useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';
import mainIcon from '../Image/mainIcon.jpg';

// Use styled for custom styles
const StyledAppBar = styled(AppBar)({
  flexGrow: 1,
});

const StyledTitle = styled(Typography)({
  flexGrow: 1,
});

const Navbar = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleDonateClick = () => {
    navigate('/donate'); // Navigate to the donation page
  };

  return (
    <StyledAppBar position="fixed" style={{ background: '#FFF' }}>
      <Toolbar>
        <img
          src={mainIcon} // Replace this with your image URL
          alt="Logo" // Provide an alt text for accessibility
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            marginRight: '10px',
          }}
        />
        <StyledTitle
          variant="h6"
          sx={{
            color: '#292F36',
            fontFamily: '"DM Serif Display"',
            fontSize: '40px',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: '125%',
          }}
        >
          JALSAMRUDHI
        </StyledTitle>
        <Link to="/about">
          <Button
            color="inherit"
            sx={{
              color: '#FF5C01',
              textAlign: 'center',
              fontFamily: 'Jost',
              fontSize: '20px',
              fontStyle: 'normal',
              fontWeight: '500',
              lineHeight: '125%',
            }}
          >
            About
          </Button>
        </Link>
        <Grid
          sx={{
            color: '#292F36',
            fontFamily: 'Jost',
            fontSize: '20px',
            fontStyle: 'normal',
            fontWeight: '500',
            lineHeight: '125%',
          }}
        >
          <Link to="/dashboard">
            <Button color="inherit">Dashboard</Button>
          </Link>
          {/* <Button color="inherit">What we are</Button> */}
          <Link to="/jsn">
            <Button color="inherit">JSN</Button>
          </Link>
          <Link to="/social_wall">
            <Button color="inherit">Social Wall</Button>
          </Link>
        </Grid>
        <Button
          color="inherit"
          onClick={handleDonateClick}
          sx={{
            display: 'flex',
            width: '141px',
            height: '44px',
            padding: '26px 37px',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            flexShrink: 0,
            borderRadius: '18px',
            background: '#FF5C01',
            boxShadow: '0px 10px 20px 0px #1F2022',
            marginLeft: '2%',
          }}
        >
          Donate
        </Button>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;
