import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import thumb02 from '../assets/images/thumbs/02.jpg'

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    margin: 20,
  },
});

const R10Card = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="R10 Project"
          height="240"
          image={thumb02}
          title="R10 Project"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            R10
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            A tech conference iOS/Android mobile application built using GraphQL, React Native and Node. Users can browse, favourite sessions and find out more informationa about the conference and speakers.
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
          onClick = {() => props.displayProjectGallery('displayR10Gallery')}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default R10Card