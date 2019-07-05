import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import thumb03 from '../assets/images/thumbs/03.jpg'

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    margin: 20,
  },
});

const Bazaar = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Bazaar Project"
          height="240"
          image={thumb03}
          title="Bazaar Project"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Bazaar
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            A full stack marketplace application built using GraphQL, React, Node, Express and GraphQL. Users can browse, buy and sell items in the Bazaar marketplace.
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

export default Bazaar