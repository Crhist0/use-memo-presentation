import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useSelector } from 'react-redux';
import { Grid, Link } from '@mui/material';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const userRedux = useSelector(({ user }) => user);

  if (userRedux.message) {
    return <h1>Usuário não encontrado</h1>;
  }

  if (!userRedux.login) {
    return <h1>Pesquise por um usuário</h1>;
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Link href={userRedux.html_url} target="_blank">
            <Avatar alt={userRedux.name} src={userRedux.avatar_url} />
          </Link>
        }
        title={userRedux.name}
        subheader={
          'Member since ' +
          userRedux.created_at.slice(8, 10) +
          '/' +
          userRedux.created_at.slice(5, 7) +
          '/' +
          userRedux.created_at.slice(0, 4)
        }
      />
      <CardContent
        sx={{
          minHeight: '200px',
          minWidth: '350px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="body1">{userRedux.bio}</Typography>

        <Typography variant="body2" color="text.secondary">
          Working at: {userRedux.company} <br />
          Location: {userRedux.location}
          <Grid container justifyContent="space-between">
            <Grid item>Repositories: {userRedux.public_repos}</Grid>
            <Grid item>Followers: {userRedux.followers}</Grid>
            <Grid item>Following: {userRedux.following}</Grid>
          </Grid>
        </Typography>
      </CardContent>
    </Card>
  );
}
