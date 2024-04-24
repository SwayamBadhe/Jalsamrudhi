import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';

// Use styled for custom styles
const StyledAppBar = styled(AppBar)({
  flexGrow: 1,
});

const StyledTitle = styled(Typography)({
  flexGrow: 1,
});

const Navbar = () => (
  <StyledAppBar
    position="static"
    style={{
      background:
        'linear-gradient(90deg, rgba(227,164,38,1) 0%, rgba(225,169,57,1) 17%, rgba(0,212,255,1) 100%)',
    }}
  >
    <Toolbar>
      <StyledTitle variant="h6">Navbar</StyledTitle>
      <Button
        color="inherit"
        style={{ background: '#FFBF34', marginRight: '5px' }}
      >
        About
      </Button>
      <Button
        color="inherit"
        style={{ background: '#FFBF34', marginRight: '5px' }}
      >
        What we do
      </Button>
      <Button
        color="inherit"
        style={{ background: '#FFBF34', marginRight: '5px' }}
      >
        What we are
      </Button>
      <Button
        color="inherit"
        style={{ background: '#FFBF34', marginRight: '5px' }}
      >
        JSN
      </Button>
      <Button
        color="inherit"
        style={{ background: '#FFBF34', marginRight: '5px' }}
      >
        Social Wall
      </Button>
      <Button
        color="inherit"
        style={{ background: '#FFBF34', marginRight: '5px' }}
      >
        Donate
      </Button>
    </Toolbar>
  </StyledAppBar>
);

export default Navbar;
