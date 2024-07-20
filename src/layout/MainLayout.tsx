import { Outlet } from 'react-router-dom';
import { Box, Grid } from '@mui/material';
import Header from '../components/Header';

// ==============================|| MAIN LAYOUT ||============================== //
const sx = {
  minHeight: '100vh',
  minWidth: '100vw',
  backgroundColor: '#f7f7f7',
};

const MainLayout = () => {
  return (
    <Box sx={sx}>
      <Header />
      <Grid container component='main' margin='0 auto' >
        <Grid item xs={12}>
          <Outlet />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainLayout;
