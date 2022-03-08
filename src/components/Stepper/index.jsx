import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function HorizontalLinearStepper(props) {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper
        activeStep={activeStep}
        sx={{
          width: '1000px',
          position: 'fixed',
          top: '50px',
          left: '50vw',
          transform: 'translateX(-50%)',
        }}
      >
        {props.steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === props.steps.length ? (
        <React.Fragment>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              pt: 2,
              justifyContent: 'space-between',
            }}
          >
            <Button onClick={handleReset}>Voltar ao início</Button>
            <Link variant="outlined" to="/semUseMemo">
              <Button>Ir para o teste prático</Button>
            </Link>
          </Box>
        </React.Fragment>
      ) : (
        <Box>
          <Typography align="justify" sx={{ mt: 2, mb: 1, fontSize: '1.3rem' }}>
            {props.text[activeStep]}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              width: '800px',
              position: 'absolute',
              bottom: '50px',
              left: '50vw',
              transform: 'translateX(-50%)',
            }}
          >
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Voltar
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />

            {activeStep !== props.steps.length - 1 ? (
              <Button onClick={handleNext}>Próximo</Button>
            ) : (
              <Link variant="outlined" to="/semUseMemo">
                <Button>Ir para o teste prático</Button>
              </Link>
            )}
          </Box>
        </Box>
      )}
    </Box>
  );
}
