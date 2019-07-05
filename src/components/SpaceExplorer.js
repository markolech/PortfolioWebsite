import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import thumb04 from '../assets/images/thumbs/04.jpg'

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    margin: 20,
  },
});

const SpaceExplorer = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Bazaar Project"
          height="240"
          image={thumb04}
          title="Bazaar Project"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Space Explorer
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            A web application built using GraphQL, React, Node, and Express. Users can browse, buy and sell items in the Bazaar marketplace.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary">
          Share
        </Button> */}
        <Button 
          size="small"
          color="primary"
          onClick = {() => props.displayProjectGallery('displaySeniorcareGallery')}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default SpaceExplorer