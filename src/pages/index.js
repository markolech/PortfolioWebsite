import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

import SeniorCare from '../components/SeniorCare'
import R10Card from '../components/R10'
import Hired from '../components/Hired'
import Genwave from '../components/Genwave'

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
            React, React Native, iOS, Android, Node and Express. I am also PMP
            (Project Management Professional) certified and have 10+ years of
            experience working in Technology. If you would like to
            contact me, the best place to reach me is on Twitter.
          </p>
          <ul className="actions">
            <li>
              <a
                href="https://twitter.com/MarkOlech"
                rel="noopener noreferrer"
                target="_blank"
                className="button"
              >
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

              <Genwave />

              <Hired />

            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex
