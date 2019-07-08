import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
// import ListItemText from '@material-ui/core/ListItemText';
// import ListItem from '@material-ui/core/ListItem';
// import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

import Gallery from '../components/Gallery'

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
    caption: 'Photo 6',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '8',
    src: full08,
    thumbnail: thumb08,
    caption: 'Photo 6',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
]


const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  container: {
    display: 'flex',
    margin: 100,
    maxWidth: "50%",
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open full-screen dialog
      </Button>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="Close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Sound
            </Typography>
            <Button color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        
        <Gallery
          className={classes.container}
          images={R10_IMAGES.map(
            ({ id, src, thumbnail, caption, description }) => ({
              src,
              thumbnail,
              caption,
              description,
            })
          )}
        />

      </Dialog>
    </div>
  );
}