import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import { createTheme } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';

const Header = () => {

  let history = useHistory();
  const handleClick = () => {
    history.push("/form")
  }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar elevation={0}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              いいねで簡単SNS
            </Typography>
            <StyledButton color="inherit" onClick={handleClick}>作品を投稿</StyledButton>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}

export default Header;

const theme = createTheme({
  palette: {
    primary: {
      main: '#F28DB2',
      contrastText: '#FFFFFF'
    },
    text: {
      primary: '#FFFFFF'
    }
  },
});

const StyledButton = styled(Button)`
   
`