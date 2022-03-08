import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import { ButtonGroup, TextField, Typography } from '@mui/material';
import { SnackbarProvider, useSnackbar } from 'notistack';

export default function TransitionAlerts() {
  const [open, setOpen] = React.useState(false);
  const [num, setNum] = React.useState(0);
  const [calc, setCalc] = React.useState(0);
  const { enqueueSnackbar } = useSnackbar();

  const expensiveCalculation = (num) => {
    for (let i = 0; i < 2000000000; i++) {
      num += 1;
    }
    return num - 2000000000;
  };

  const calculation = React.useMemo(() => expensiveCalculation(calc), [calc]);

  if (open) {
    setTimeout(() => {
      setOpen(false);
    }, 1500);
  }

  function changeNum(e) {
    setNum(Number(e.target.value));
  }

  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          bottom: '40%',
          transform: 'translateX(-50%)',
        }}
      >
        <Box>
          <Collapse in={open}>
            <Alert sx={{ mb: 2 }}>{calculation}</Alert>
          </Collapse>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
          >
            <TextField
              id="numero"
              label="Insira um número..."
              variant="outlined"
              onChange={(e) => {
                changeNum(e);
                enqueueSnackbar('Alterando o estado local "num"');
              }}
            />
            <Button
              disabled={open}
              variant="outlined"
              onClick={() => {
                setCalc(num);
                setOpen(true);
                enqueueSnackbar('Alterando o estado local "calc"');
              }}
              sx={{ margin: '0rem', padding: '0rem 26px' }}
            >
              Calcular
            </Button>
          </ButtonGroup>
        </Box>
        <Typography align="center" variant="h6" sx={{ maxWidth: '350px' }}>
          O código acima percorre um laço de repetição 2 bilhões de vezes
        </Typography>
      </Box>
    </>
  );
}
