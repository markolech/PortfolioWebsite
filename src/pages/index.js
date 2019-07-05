import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'

import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'

import SeniorcareCard from '../components/SeniorCareCard'
import R10Card from '../components/R10Card'
import Bazaar from '../components/Bazaar'
import SpaceExplorer from '../components/SpaceExplorer'

import { createGenerateClassName } from '@material-ui/styles'

const container = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  margin: 'auto',
}

const projectContainer = {
  diplay: 'flex',
  flexDirection: 'column',
  flex: '1',
}

// const project = {
// 	flex: "1",
// 	margin: "5px",
// 	padding: "20px",
// 	minwidth: '200px',
// }

//Need to refactor this out into another file, or into the gallary directly

const SENIOR_CARE_IMAGES = [
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
]

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
]


class HomeIndex extends React.Component {
  constructor() {
    super()

    this.state = {
      displaySeniorcareGallery: false,
      displayR10Gallery: false,
      displayBazaarGallery: false,
      displaySpaceExplorerGallery: false,
    }

    this.displayProjectGallery = this.displayProjectGallery.bind(this)
  }

  displayProjectGallery(projectNameStateFlag) {
    console.log('changing ', projectNameStateFlag)
    this.setState({
			[projectNameStateFlag]: !this.state[projectNameStateFlag],
    })
  }

  
  render() {
    const siteTitle = 'Mark Olech'
    const siteDescription = 'Portfolio'

    return (
      <Layout>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        <div id="main">
          <section id="one">
            <header className="major">
              <h2>My Portfolio</h2>
            </header>
            <p>
              I am a Full Stack Application Developer specializing in GraphQL,
              React, React Native, iOS, Android, Node and Express. If you would
              like to contact me, the best place to reach me is on Twitter on in
              the contact form below.
            </p>
            <ul className="actions">
              <li>
                <a href="https://twitter.com/MarkOlech" className="button">
                  Contact on Twitter
                </a>
              </li>
            </ul>
          </section>

          <section id="two">
            <h2>Recent Projects</h2>
            <div style={container}>
              <div style={projectContainer}>
                <SeniorcareCard
									displayProjectGallery={this.displayProjectGallery}
									displaySeniorcareGallery={this.state.displaySeniorcareGallery}
                />

                {this.state.displaySeniorcareGallery ? (
                  <Gallery
										displaySeniorcareGallery={this.state.displaySeniorcareGallery}
                    images={SENIOR_CARE_IMAGES.map(
                      ({ id, src, thumbnail, caption, description }) => ({
                        src,
                        thumbnail,
                        caption,
                        description,
                      })
										)}
										displayProjectGallery={this.displayProjectGallery}
                  />
                ) : null}

								<R10Card 
									displayProjectGallery={this.displayProjectGallery} 
									displayR10Gallery={this.state.displayR10Gallery}
								/>

								{this.state.displayR10Gallery ? (
                  <Gallery
										displaySeniorcareGallery={this.state.displayR10Gallery}
                    images={SENIOR_CARE_IMAGES.map(
                      ({ id, src, thumbnail, caption, description }) => ({
                        src,
                        thumbnail,
                        caption,
                        description,
                      })
										)}
										displayProjectGallery={this.displayProjectGallery}
                  />
                ) : null}


                <Bazaar displayProjectGallery={this.displayProjectGallery} />
                <SpaceExplorer
                  displayProjectGallery={this.displayProjectGallery}
                />
              </div>
            </div>

            {/* <ul className="actions">
							<br></br> 
							<li>
                <a href="#" className="button">
                  Full Portfolio
                </a>
              </li>
            </ul>
            <Link to="/seniorcare/">Senior Care</Link> */}
            {/* <Button
                onPress={() => navigate('SeniorCareProject')}
                title='Senior Care Full Stack App' 
            /> */}
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex

{
  /* <section id="three">
            <h2>Get In Touch</h2>
            <p>
              Contact me about any of my projects, or if you have a project or
              company you think I would be a fit to work with.
            </p>
            <div className="row">
              <div className="8u 12u$(small)">
                <form method="post" action="#">
                  <div className="row uniform 50%">
                    <div className="6u 12u$(xsmall)">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                      />
                    </div>
                    <div className="6u 12u$(xsmall)">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="12u">
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Message"
                        rows="4"
                      ></textarea>
                    </div>
                  </div>
                </form>
                <ul className="actions">
                  <li>
                    <input type="submit" value="Send Message" />
                  </li>
                </ul>
              </div>
              <div className="4u 12u$(small)">
                <ul className="labeled-icons">
                  <li>
                    <h3 className="icon fa-home">
                      <span className="label">Address</span>
                    </h3>
                    1234 Somewhere Rd.
                    <br />
                    Nashville, TN 00000
                    <br />
                    United States
                  </li>
                  <li>
                    <h3 className="icon fa-mobile">
                      <span className="label">Phone</span>
                    </h3>
                    000-000-0000
                  </li>
                  <li>
                    <h3 className="icon fa-envelope-o">
                      <span className="label">Email</span>
                    </h3>
                    <a href="#">hello@untitled.tld</a>
                  </li>
                </ul>
              </div>
            </div>
          </section> */
}
