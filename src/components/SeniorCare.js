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

import thumb01 from '../assets/images/projects/Senior_Care/Senior_Care_01_Full.jpg'
import full01 from '../assets/images/projects/Senior_Care/Senior_Care_01_Thumb.jpg'
import thumb02 from '../assets/images/projects/Senior_Care/Senior_Care_02_Full.jpg'
import full02 from '../assets/images/projects/Senior_Care/Senior_Care_02_Thumb.jpg'
import thumb03 from '../assets/images/projects/Senior_Care/Senior_Care_03_Full.jpg'
import full03 from '../assets/images/projects/Senior_Care/Senior_Care_03_Thumb.jpg'
import thumb04 from '../assets/images/projects/Senior_Care/Senior_Care_04_Full.jpg'
import full04 from '../assets/images/projects/Senior_Care/Senior_Care_04_Thumb.jpg'
import thumb05 from '../assets/images/projects/Senior_Care/Senior_Care_05_Full.jpg'
import full05 from '../assets/images/projects/Senior_Care/Senior_Care_05_Thumb.jpg'
import thumb06 from '../assets/images/projects/Senior_Care/Senior_Care_06_Full.jpg'
import full06 from '../assets/images/projects/Senior_Care/Senior_Care_06_Thumb.jpg'
import thumb07 from '../assets/images/projects/Senior_Care/Senior_Care_07_Full.jpg'
import full07 from '../assets/images/projects/Senior_Care/Senior_Care_07_Thumb.jpg'
import thumb08 from '../assets/images/projects/Senior_Care/Senior_Care_08_Full.jpg'
import full08 from '../assets/images/projects/Senior_Care/Senior_Care_08_Thumb.jpg'
import thumb09 from '../assets/images/projects/Senior_Care/Senior_Care_09_Full.jpg'
import full09 from '../assets/images/projects/Senior_Care/Senior_Care_09_Thumb.jpg'
import thumb10 from '../assets/images/projects/Senior_Care/Senior_Care_10_Full.jpg'
import full10 from '../assets/images/projects/Senior_Care/Senior_Care_10_Thumb.jpg'
import thumb12 from '../assets/images/projects/Senior_Care/Senior_Care_12_Full.jpg'
import full12 from '../assets/images/projects/Senior_Care/Senior_Care_12_Thumb.jpg'

const SENIOR_CARE_IMAGES = [
  {
    id: '1',
    src: full01,
    thumbnail: thumb01,
    caption: 'Family or Caregiver',
    description: 'Two user types, family member or caregiver.',
  },
  {
    id: '2',
    src: full02,
    thumbnail: thumb02,
    caption: 'Login',
    description: 'Login screen 2-factor authentication (password / email or SMS).',
  },
  {
    id: '3',
    src: full03,
    thumbnail: thumb03,
    caption: 'Find Caregiver',
    description: 'Find caregiver and filter based on multiple criteria.',
  },
  {
    id: '4',
    src: full04,
    thumbnail: thumb04,
    caption: 'Profilt Page',
    description: 'View and edit your profile.',
  },
  {
    id: '5',
    src: full05,
    thumbnail: thumb05,
    caption: 'Post Job',
    description: 'Multi-part complex form.',
  },
  {
    id: '6',
    src: full06,
    thumbnail: thumb06,
    caption: 'Calendar',
    description: 'Calendar date selection.',
  },
  {
    id: '7',
    src: full07,
    thumbnail: thumb07,
    caption: 'Post Job Input Form',
    description: 'Address input form.',
  },
  {
    id: '8',
    src: full08,
    thumbnail: thumb08,
    caption: 'Profile',
    description: 'Profile with GraphQL File Upload.',
  },
  {
    id: '9',
    src: full09,
    thumbnail: thumb09,
    caption: 'Chat',
    description: 'Chat functionality with subscriptions.',
  },
  {
    id: '10',
    src: full10,
    thumbnail: thumb10,
    caption: 'Photo 10',
    description: 'Find jobs and apply.',
  },
  {
    id: '12',
    src: full12,
    thumbnail: thumb12,
    caption: 'Search Filter',
    description: 'Filter based on multiple criteria.',
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

const SeniorCare = props => {
  const [displaySeniorCareGallery, setSeniorCareGallery] = useState(false)

  const classes = useStyles()

  let buttonText

  return (
    <div>
      <div className={classes.cardContainer}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Senior Care Project"
              height="240"
              image={thumb01}
              title="Senior Care Project"
              onClick={() => setSeniorCareGallery(!displaySeniorCareGallery)}
            />
            <CardContent
              onClick={() => setSeniorCareGallery(!displaySeniorCareGallery)}
            >
              <Typography gutterBottom variant="h5" component="h2">
                Senior Care
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                A full stack application built using GraphQL, React, Node,
                Express and PostgreSQL.
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
              onClick={() => setSeniorCareGallery(!displaySeniorCareGallery)}
            >
              {displaySeniorCareGallery
                ? (buttonText = 'Close Gallery')
                : (buttonText = 'Open Gallery')}
            </Button>
          </CardActions>
        </Card>
      </div>
      {displaySeniorCareGallery ? (
        <Gallery
          images={SENIOR_CARE_IMAGES.map(
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

export default SeniorCare
