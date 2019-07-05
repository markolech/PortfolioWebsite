import React from 'react'
import Layout from '../components/layout'
import Helmet from 'react-helmet'

const SeniorCare = () => {
  const siteTitle = 'Mark Olech'
  const siteDescription = 'Portfolio'
  
  return (
    <Layout>
      <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>
    </Layout>
  )
}

export default SeniorCare