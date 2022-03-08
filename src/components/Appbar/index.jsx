import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Grid } from '@mui/material';
import { getGithubProfile } from '../../api';
import { useDispatch } from 'react-redux';
import { updateState } from '../../store/UserSlice';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar() {
  const dispatch = useDispatch();

  function fetchGithub(e) {
    if (e.key === 'Enter') {
      getGithubProfile(e.target.value)
        .then((user) => {
          dispatch(updateState(user));
        })
        .catch((err) => {
          dispatch(updateState(err));
        });
    }
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Grid container>
            <Grid item sx={{ flexGrow: 1 }}>
              <Typography
                variant="h6"
                noWrap
                component="div"
                position="fixed"
                left="50vw"
                sx={{ transform: 'translateX(-50%)' }}
              >
                Search for a Github profile
              </Typography>
            </Grid>
            <Grid item>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Github profile..."
                  onKeyPress={fetchGithub}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
