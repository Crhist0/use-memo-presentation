import React from 'react';

import { Box, Button, Container, CssBaseline, Grid } from '@mui/material';
import SearchAppBar from '../components/Appbar';
import RecipeReviewCard from '../components/Card';
import { useSelector } from 'react-redux';
import TransitionAlerts from '../components/Counter';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Container
        disableGutters
        maxWidth=""
        sx={{
          padding: 0,
          '& .MuiContainer-root': {
            padding: 0,
          },
        }}
      >
        <SearchAppBar />
      </Container>
      <Container maxWidth="sm" sx={{ height: '90%' }}>
        <Grid
          sx={{ height: '90%' }}
          container
          direction="column"
          justifyContent="center"
          alignContent="center"
        >
          <Grid item>
            <RecipeReviewCard />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;

// const Home = () => {
//   const { logOutUser } = useContext(AuthContext);
//   return (
//     <div style={{ height: "100vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center" }}>
//       <button onClick={logOutUser}>Logout</button>
//     </div>
//   );
// };
