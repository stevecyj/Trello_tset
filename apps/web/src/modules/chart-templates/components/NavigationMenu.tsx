import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Router from 'next/router';
import Button from '@mui/material/Button';

const BackToChartPage = () => {
  Router.replace('/');
};

export const NavigationMenu = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{ margin: 0 }} position="static">
        <Toolbar>
          <Typography
            onClick={BackToChartPage}
            variant="h6"
            component="div"
            sx={{ cursor: 'pointer', flexGrow: 0.05 }}
          >
            Charts
          </Typography>

          <Typography variant="h6" component="div" sx={{ flexGrow: 0.05 }}>
            Reports
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
