import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import thumb01 from '../assets/images/thumbs/01.jpg'

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    margin: 20,
  },
})

const SeniorcareCard = props => {
  const classes = useStyles()

  let buttonText;

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Seniorcare Project"
          height="240"
          image={thumb01}
          title="Seniorcare Project"
          onClick={() =>
            props.displayProjectGallery('displaySeniorcareGallery')
          }
        />
        <CardContent
          onClick={() =>
            props.displayProjectGallery('displaySeniorcareGallery')
          }
        >
          <Typography gutterBottom variant="h5" component="h2">
            Senior Care
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            A full stack application built using GraphQL, React, Node, Express
            and PostgreSQL.
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
          onClick={() =>
            props.displayProjectGallery('displaySeniorcareGallery')
          }
        >
          {props.displaySeniorcareGallery
            ? (buttonText = 'Close Gallery')
            : (buttonText = 'Open Gallery')}
        </Button>
      </CardActions>
    </Card>
  )
}

export default SeniorcareCard
