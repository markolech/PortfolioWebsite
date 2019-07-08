import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

import SeniorCare from '../components/SeniorCare'
import R10Card from '../components/R10'
import Bazaar from '../components/Bazaar'
import SpaceExplorer from '../components/SpaceExplorer'

import { createGenerateClassName } from '@material-ui/styles'

// const container = {
//   display: 'flex',
//   flexDirection: 'column',
//   width: '100%',
//   margin: 'auto',
// }

// const projectContainer = {
//   diplay: 'flex',
//   flexDirection: 'column',
//   flex: '1',
// }

// const project = {
// 	flex: "1",
// 	margin: "5px",
// 	padding: "20px",
// 	minwidth: '200px',
// }

const HomeIndex = () => {
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
          <div>
            <div>
              <SeniorCare />

              <R10Card />

              <Bazaar />

              <SpaceExplorer />

             

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
        </section>
      </div>
    </Layout>
  )
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
