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

import thumb01 from '../assets/images/projects/Bazaar/Bazaar_01_Full.png'
import full01 from '../assets/images/projects/Bazaar/Bazaar_01_Thumb.png'
import thumb02 from '../assets/images/projects/Bazaar/Bazaar_02_Full.png'
import full02 from '../assets/images/projects/Bazaar/Bazaar_02_Thumb.png'
import thumb03 from '../assets/images/projects/Bazaar/Bazaar_03_Full.png'
import full03 from '../assets/images/projects/Bazaar/Bazaar_03_Thumb.png'
import thumb04 from '../assets/images/projects/Bazaar/Bazaar_04_Full.png'
import full04 from '../assets/images/projects/Bazaar/Bazaar_04_Thumb.png'
import thumb05 from '../assets/images/projects/Bazaar/Bazaar_05_Full.png'
import full05 from '../assets/images/projects/Bazaar/Bazaar_05_Thumb.png'

const BAZAAR_IMAGES = [
  {
    id: '1',
    src: full01,
    thumbnail: thumb01,
    caption: 'Landing page for the app',
    description: 'Landing Page.',
  },
  {
    id: '2',
    src: full02,
    thumbnail: thumb02,
    caption: 'Login Form',
    description: 'Login uses password encryption.',
  },
  {
    id: '3',
    src: full03,
    thumbnail: thumb03,
    caption: 'Sign Up Form',
    description: 'Sign up for an account.',
  },
  {
    id: '4',
    src: full04,
    thumbnail: thumb04,
    caption: 'Buy Page.',
    description: 'Shows all items for sale in the Bazaar Marketplace.',
  },
  {
    id: '5',
    src: full05,
    thumbnail: thumb05,
    caption: 'Sell Page.',
    description: 'Sell Something in the Bazaar Marketplace.',
  },
]

const useStyles = makeStyles({
  card: {
    maxWidth: '100%',
    marginBottom: 20,
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
})

const Bazaar = props => {
  const [displayBazaarGallery, setDisplayBazaarGallery] = useState(false)

  const classes = useStyles()

  return (
    <div>
      <div className={classes.cardContainer}>
        <Card className={classes.card}>
          <CardActionArea
            onClick={() => setDisplayBazaarGallery(!displayBazaarGallery)}
          >
            <CardMedia
              component="img"
              alt="Bazaar Project"
              height="240"
              image={thumb01}
              title="Bazaar Project"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Bazaar
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                A full stack marketplace application built using GraphQL, React,
                Node, Express and GraphQL. Users can browse, buy and sell items
                in the Bazaar marketplace.
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
              onClick={() => setDisplayBazaarGallery(!displayBazaarGallery)}
            >
              Open Gallery
            </Button>
            <a href="https://github.com/markolech/Bazaar" rel="noopener noreferrer" target="_blank" className="icon fa-github fa-lg"><span className="label">Github</span></a>
          </CardActions>
        </Card>
      </div>
      {displayBazaarGallery ? (
        <Gallery
          lightboxIsOpen={displayBazaarGallery}
          setGalleryView={setDisplayBazaarGallery}
          images={BAZAAR_IMAGES.map(
            ({ id, src, thumbnail, caption, description }) => ({
              src,
              thumbnail,
              caption,
              description,
            })
          )}
        />
      ) : null}
    </div>
  )
}

export default Bazaar
