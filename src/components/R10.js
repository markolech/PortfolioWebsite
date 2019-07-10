import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import Gallery from '../components/Gallery'
// import LargeGalleryModal from '../components/LargeGalleryModal'

import thumb01 from '../assets/images/projects/R10/R10_01_full.jpg'
import full01 from '../assets/images/projects/R10/R10_01_thumb.jpg'
import thumb02 from '../assets/images/projects/R10/R10_02_full.jpg'
import full02 from '../assets/images/projects/R10/R10_02_thumb.jpg'
import thumb03 from '../assets/images/projects/R10/R10_03_full.jpg'
import full03 from '../assets/images/projects/R10/R10_03_thumb.jpg'
import thumb04 from '../assets/images/projects/R10/R10_04_full.jpg'
import full04 from '../assets/images/projects/R10/R10_04_thumb.jpg'
import thumb05 from '../assets/images/projects/R10/R10_05_full.jpg'
import full05 from '../assets/images/projects/R10/R10_05_thumb.jpg'
import thumb06 from '../assets/images/projects/R10/R10_06_full.jpg'
import full06 from '../assets/images/projects/R10/R10_06_thumb.jpg'
import thumb07 from '../assets/images/projects/R10/R10_07_full.jpg'
import full07 from '../assets/images/projects/R10/R10_07_thumb.jpg'
import thumb08 from '../assets/images/projects/R10/R10_08_full.jpg'
import full08 from '../assets/images/projects/R10/R10_08_thumb.jpg'

import { ClientError } from 'graphql-request'

const R10_IMAGES = [
  {
    id: '1',
    src: full01,
    thumbnail: thumb01,
    caption: 'Photo 1',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '2',
    src: full02,
    thumbnail: thumb02,
    caption: 'Photo 2',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '3',
    src: full03,
    thumbnail: thumb03,
    caption: 'Photo 3',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '4',
    src: full04,
    thumbnail: thumb04,
    caption: 'Photo 4',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '5',
    src: full05,
    thumbnail: thumb05,
    caption: 'Photo 5',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '6',
    src: full06,
    thumbnail: thumb06,
    caption: 'Photo 6',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '7',
    src: full07,
    thumbnail: thumb07,
    caption: 'Photo 7',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '8',
    src: full08,
    thumbnail: thumb08,
    caption: 'Photo 8',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
]

const useStyles = makeStyles({
  card: {
    maxWidth: '75%',
    marginBottom: 20,
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
})

const R10Card = props => {
  const [displayR10Gallery, setDisplayR10Gallery] = useState(false)

  const classes = useStyles()

  let buttonText

  return (
    <div>
      <div className={classes.cardContainer}>
        <Card className={classes.card}>
          <CardActionArea
            onClick={() => setDisplayR10Gallery(!displayR10Gallery)}
          >
            <CardMedia
              component="img"
              alt="R10 Project"
              height="240"
              image={thumb01}
              title="R10 Project"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                R10
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                A tech conference iOS/Android mobile application built using
                GraphQL, React Native and Node. Users can browse, favourite
                sessions and find out more informationa about the conference and
                speakers.
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
              onClick={() => setDisplayR10Gallery(!displayR10Gallery)}
            >
              {displayR10Gallery
                ? (buttonText = 'Close Gallery')
                : (buttonText = 'Open Gallery')}
            </Button>
          </CardActions>
        </Card>
      </div>
      {displayR10Gallery ? (
        <Gallery
          images={R10_IMAGES.map(
            ({ id, src, thumbnail, caption, description }) => ({
              src,
              thumbnail,
              caption,
              description,
            })
          )}
        />
      ) : null}
      {/* <Button onPress={() => null}>Test</Button> */}
  
    </div>
  )
}

export default R10Card