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

// import thumb01 from '../assets/images/projects/Space_Explorer/Space_Explorer_01_Full.jpg'
// import full01 from '../assets/images/projects/Space_Explorer/Space_Explorer_01_Thumb.jpg'
import thumb02 from '../assets/images/projects/Space_Explorer/Space_Explorer_02_Full.jpg'
import full02 from '../assets/images/projects/Space_Explorer/Space_Explorer_02_Thumb.jpg'
// import thumb03 from '../assets/images/projects/Space_Explorer/Space_Explorer_03_Full.jpg'
// import full03 from '../assets/images/projects/Space_Explorer/Space_Explorer_03_Thumb.jpg'
import thumb04 from '../assets/images/projects/Space_Explorer/Space_Explorer_04_Full.jpg'
import full04 from '../assets/images/projects/Space_Explorer/Space_Explorer_04_Thumb.jpg'
// import thumb05 from '../assets/images/projects/Space_Explorer/Space_Explorer_05_Full.jpg'
// import full05 from '../assets/images/projects/Space_Explorer/Space_Explorer_05_Thumb.jpg'


const SPACE_EXPLORER_IMAGES = [
  // {
  //   id: '1',
  //   src: full01,
  //   thumbnail: thumb01,
  //   caption: 'Photo 1',
  //   description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  // },
  {
    id: '2',
    src: full02,
    thumbnail: thumb02,
    caption: 'Photo 2',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  // {
  //   id: '3',
  //   src: full03,
  //   thumbnail: thumb03,
  //   caption: 'Photo 3',
  //   description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  // },
  {
    id: '4',
    src: full04,
    thumbnail: thumb04,
    caption: 'Photo 4',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  // {
  //   id: '5',
  //   src: full05,
  //   thumbnail: thumb05,
  //   caption: 'Photo 5',
  //   description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  // },
  // {
  //   id: '6',
  //   src: full06,
  //   thumbnail: thumb06,
  //   caption: 'Photo 6',
  //   description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  // },
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
            {/* <Button size="small" color="primary">
          Share
        </Button> */}
            <Button
              size="small"
              color="primary"
              onClick={() =>
                setDisplaySpaceExplorerGallery(!displaySpaceExplorerGallery)
              }
            >
            Open Gallary
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
