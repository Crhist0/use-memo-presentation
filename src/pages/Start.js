import React from 'react';

import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  Paper,
  Typography,
} from '@mui/material';
import SearchAppBar from '../components/Appbar';
import RecipeReviewCard from '../components/Card';
import { useSelector } from 'react-redux';
import TransitionAlerts from '../components/Counter';
import { Link } from 'react-router-dom';
import HorizontalLinearStepper from '../components/Stepper';

const Start = () => {
  return (
    <>
      <Container maxWidth="sm" sx={{ height: '100%' }}>
        <Grid
          sx={{ height: '90%' }}
          container
          direction="column"
          justifyContent="center"
          alignContent="center"
        >
          <Paper
            elevation={3}
            sx={{
              padding: '3rem',
              height: '333px',
              width: '600px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '50px',
              backgroundImage: 'url(https://i.morioh.com/210531/aa11e5c9.webp)',
              backgroundPosition: 'center',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            }}
          />

          <Link
            variant="outlined"
            to="/intro"
            style={{ position: 'fixed', bottom: '50px' }}
          >
            <Button>Iniciar</Button>
          </Link>
        </Grid>
      </Container>
    </>
  );
};

export default Start;
