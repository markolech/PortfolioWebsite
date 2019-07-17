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
import thumb01 from '../assets/images/projects/Space_Explorer/Space_Explorer_01_Full.png'
import full01 from '../assets/images/projects/Space_Explorer/Space_Explorer_01_Thumb.png'
import thumb02 from '../assets/images/projects/Space_Explorer/Space_Explorer_02_Full.png'
import full02 from '../assets/images/projects/Space_Explorer/Space_Explorer_02_Thumb.png'
import thumb03 from '../assets/images/projects/Space_Explorer/Space_Explorer_03_Full.png'
import full03 from '../assets/images/projects/Space_Explorer/Space_Explorer_03_Thumb.png'
import thumb04 from '../assets/images/projects/Space_Explorer/Space_Explorer_04_Full.png'
import full04 from '../assets/images/projects/Space_Explorer/Space_Explorer_04_Full.png'
import thumb05 from '../assets/images/projects/Space_Explorer/Space_Explorer_05_Full.png'
import full05 from '../assets/images/projects/Space_Explorer/Space_Explorer_05_Thumb.png'

const SPACE_EXPLORER_IMAGES = [
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
    caption: 'Book a Launch.',
    description: 'Book a Launch on a SpaceX Flight.',
  },
  {
    id: '5',
    src: full05,
    thumbnail: thumb05,
    caption: 'View your Launch.',
    description: 'View a List of your Booked Launches.',
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

const SpaceExplorer = props => {
  const [
    displaySpaceExplorerGallery,
    setDisplaySpaceExplorerGallery,
  ] = useState(false)

  const classes = useStyles()

  return (
    <div>
      <div className={classes.cardContainer}>
        <Card className={classes.card}>
          <CardActionArea
            onClick={() => setDisplaySpaceExplorerGallery(!displaySpaceExplorerGallery)}
          >
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
                A web application built using GraphQL, React, Node, and Express.
                Users can browse, buy and sell items in the Bazaar marketplace.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              size="small"
              color="primary"
              onClick={() =>
                setDisplaySpaceExplorerGallery(!displaySpaceExplorerGallery)
              }
            >
            Open Gallery
            </Button>
            <a href="https://github.com/markolech/space_explorer" rel="noopener noreferrer" target="_blank" className="icon fa-github fa-lg"><span className="label">Github</span></a>
          </CardActions>
        </Card>
      </div>
      {displaySpaceExplorerGallery ? (
        <Gallery
        lightboxIsOpen={displaySpaceExplorerGallery}
        setGalleryView={setDisplaySpaceExplorerGallery}
          images={SPACE_EXPLORER_IMAGES.map(
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

export default SpaceExplorer
