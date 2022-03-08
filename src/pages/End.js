import React from 'react';

import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  Paper,
  Typography,
  Link,
} from '@mui/material';
import SearchAppBar from '../components/Appbar';
import RecipeReviewCard from '../components/Card';
import { useSelector } from 'react-redux';
import TransitionAlerts from '../components/Counter';
import HorizontalLinearStepper from '../components/Stepper';
import { Link as InternalLink } from 'react-router-dom';

const End = () => {
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
          <Link
            href="https://dmitripavlutin.com/react-usememo-hook/"
            target="_blank"
            sx={{ textDecoration: 'none', margin: '1rem' }}
          >
            <Paper
              elevation={3}
              sx={{
                padding: '3rem',
                height: '250px',
                width: '400px',
                alignItems: 'center',
                borderRadius: '50px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
              }}
            >
              <Typography>How to Memoize with React.useMemo()</Typography>
              <Box>
                <Typography>Publicado em 04/06/2021</Typography>
                <Typography>por Dmitri Pavlutin</Typography>
              </Box>
            </Paper>
          </Link>
          <Link
            href="https://blog.logrocket.com/react-hooks-cheat-sheet-unlock-solutions-to-common-problems-af4caf699e70/"
            target="_blank"
            sx={{ textDecoration: 'none', margin: '1rem' }}
          >
            <Paper
              elevation={3}
              sx={{
                padding: '3rem',
                height: '250px',
                width: '400px',
                alignItems: 'center',
                borderRadius: '50px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
              }}
            >
              <Typography>
                React Hooks cheat sheet: Best practices with examples
              </Typography>
              <Box>
                <Typography>Publicado em 15/01/2021</Typography>
                <Typography>por Ohans Emmanuel</Typography>
              </Box>
            </Paper>
          </Link>
          <Link
            href="https://www.youtube.com/watch?v=NmU2nNehNNY"
            target="_blank"
            sx={{ textDecoration: 'none', margin: '1rem' }}
          >
            <Paper
              elevation={3}
              sx={{
                padding: '3rem',
                height: '250px',
                width: '400px',
                alignItems: 'center',
                borderRadius: '50px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
              }}
            >
              <Typography>
                React - Guia definitivo de performance (useMemo, useCallback,
                memo) - Code/drops #82
              </Typography>
              <Box>
                <Typography>Publicado em 21/06/2021</Typography>
                <Typography>por Rocketseat</Typography>
              </Box>
            </Paper>
          </Link>
          <Link
            href="https://www.youtube.com/watch?v=RZG0iRfUaY0&t=7s"
            target="_blank"
            sx={{ textDecoration: 'none', margin: '1rem' }}
          >
            <Paper
              elevation={3}
              sx={{
                padding: '3rem',
                height: '250px',
                width: '400px',
                alignItems: 'center',
                borderRadius: '50px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
              }}
            >
              <Typography>
                Entendendo a diferença entre os React Hooks useCallback e
                useMemo
              </Typography>
              <Box>
                <Typography>Publicado em 28/11/2021</Typography>
                <Typography>por CodarMe</Typography>
              </Box>
            </Paper>
          </Link>

          <Typography style={{ position: 'fixed', bottom: '50px' }}>
            Obrigado!
          </Typography>
          <Typography variant="h6" style={{ position: 'fixed', top: '50px' }}>
            Principais referências
          </Typography>
          <InternalLink
            variant="outlined"
            to="/start"
            style={{ position: 'fixed', bottom: '50px', right: '50px' }}
          >
            <Button>Retornar ao início</Button>
          </InternalLink>
        </Grid>
      </Container>
    </>
  );
};

export default End;
