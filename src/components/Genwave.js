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
import thumb01 from '../assets/images/projects/Genwave/Genwave_01_Full.jpg'
import full01 from '../assets/images/projects/Genwave/Genwave_01_Thumb.jpg'
import thumb02 from '../assets/images/projects/Genwave/Genwave_02_Full.jpg'
import full02 from '../assets/images/projects/Genwave/Genwave_02_Thumb.jpg'
import thumb03 from '../assets/images/projects/Genwave/Genwave_03_Full.jpg'
import full03 from '../assets/images/projects/Genwave/Genwave_03_Thumb.jpg'
import thumb04 from '../assets/images/projects/Genwave/Genwave_04_Full.jpg'
import full04 from '../assets/images/projects/Genwave/Genwave_04_Thumb.jpg'
import thumb05 from '../assets/images/projects/Genwave/Genwave_05_Full.jpg'
import full05 from '../assets/images/projects/Genwave/Genwave_05_Thumb.jpg'

const GENWAVE_IMAGES = [
  {
    id: '1',
    src: full01,
    thumbnail: thumb01,
    caption: 'Main page for the website',
    description: 'Landing Page Partial Screen 1',
  },
  {
    id: '2',
    src: full02,
    thumbnail: thumb02,
    caption: 'Main page for the website continued',
    description: 'Landing Page Partial Screen 2',
  },
  {
    id: '3',
    src: full03,
    thumbnail: thumb03,
    caption: 'Main page for the website continued',
    description: 'Landing Page Partial Screen 3',
  },
  {
    id: '4',
    src: full04,
    thumbnail: thumb04,
    caption: 'Main page for the website continued',
    description: 'Landing Page Partial Screen 4',
  },
  {
    id: '5',
    src: full05,
    thumbnail: thumb05,
    caption: 'Main page for the website continued',
    description: 'Landing Page Partial Screen 5',
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

const Genwave = props => {
  const [displayGenwaveGallery, setDisplayGenwaveGallery] = useState(false)

  const classes = useStyles()

  return (
    <div>
      <div className={classes.cardContainer}>
        <Card className={classes.card}>
          <CardActionArea
            onClick={() => setDisplayGenwaveGallery(!displayGenwaveGallery)}
          >
            <CardMedia
              component="img"
              alt="Genwave Project"
              height="480"
              image={thumb01}
              title="Genwave Project"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Genwave
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                A website I designed and built for a client. The site runs
                WordPress with the Divi theme and some custom CSS.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              size="small"
              color="primary"
              onClick={() => setDisplayGenwaveGallery(!displayGenwaveGallery)}
            >
              Open Gallery
            </Button>
            {/* <a href="https://github.com/markolech/space_explorer" rel="noopener noreferrer" target="_blank" className="icon fa-github fa-lg"><span className="label">Github</span></a> */}
          </CardActions>
        </Card>
      </div>
      {displayGenwaveGallery ? (
        <Gallery
          lightboxIsOpen={displayGenwaveGallery}
          setGalleryView={setDisplayGenwaveGallery}
          images={GENWAVE_IMAGES.map(
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

export default Genwave
