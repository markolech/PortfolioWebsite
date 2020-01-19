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
import thumb01 from '../assets/images/projects/Hired/Hired_01_Full.png'
import full01 from '../assets/images/projects/Hired/Hired_01_Thumb.png'
import thumb02 from '../assets/images/projects/Hired/Hired_02_Full.png'
import full02 from '../assets/images/projects/Hired/Hired_02_Thumb.png'
import thumb03 from '../assets/images/projects/Hired/Hired_03_Full.png'
import full03 from '../assets/images/projects/Hired/Hired_03_Thumb.png'
import thumb04 from '../assets/images/projects/Hired/Hired_04_Full.png'
import full04 from '../assets/images/projects/Hired/Hired_04_Full.png'

const HIRED_IMAGES = [
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
    caption: 'Redbook',
    description: 'List of all graduates.',
  },
  {
    id: '3',
    src: full03,
    thumbnail: thumb03,
    caption: 'Mentors',
    description: 'List of all mentors.',
  },
  {
    id: '4',
    src: full04,
    thumbnail: thumb04,
    caption: 'Chat',
    description: 'Chat with other Red alumni.',
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

const Hired = props => {
  const [
    displayHiredGallery,
    setDisplayHiredGallery,
  ] = useState(false)

  const classes = useStyles()

  return (
    <div>
      <div className={classes.cardContainer}>
        <Card className={classes.card}>
          <CardActionArea
            onClick={() => setDisplayHiredGallery(!displayHiredGallery)}
          >
            <CardMedia
              component="img"
              alt="Hired Project"
              height="240"
              image={thumb01}
              title="Hired Project"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                HiRED
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                A web application built using GraphQL, React, Node, and Express.
                Red Alumni can connect, find mentors and become a mentor.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              size="small"
              color="primary"
              onClick={() =>
                setDisplayHiredGallery(!displayHiredGallery)
              }
            >
              Open Gallery
            </Button>
            {/* <a href="https://github.com/markolech/space_explorer" rel="noopener noreferrer" target="_blank" className="icon fa-github fa-lg"><span className="label">Github</span></a> */}
          </CardActions>
        </Card>
      </div>
      {displayHiredGallery ? (
        <Gallery
          lightboxIsOpen={displayHiredGallery}
          setGalleryView={setDisplayHiredGallery}
          images={HIRED_IMAGES.map(
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

export default Hired
