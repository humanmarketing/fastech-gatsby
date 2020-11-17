import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import './all.sass'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&family=Raleway:wght@400;600;700&display=swap" as="style" />
        <link rel="preload" href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" as="style" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&family=Raleway:wght@400;600;700&display=swap"/>
        <link rel="stylesheet" href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css"/>
        <title>{title}</title>
        <meta name="description" content={description} />

        <link rel="apple-touch-icon" sizes="180x180" href={`${withPrefix('/')}img/apple-touch-icon.png`} />
        <link rel="icon" type="image/png" href={`${withPrefix('/')}img/favicon-32x32.png`} sizes="32x32" />
        <link rel="icon" type="image/png" href={`${withPrefix('/')}img/favicon-16x16.png`} sizes="16x16" />

        <link rel="mask-icon" href={`${withPrefix('/')}img/favicon-32x32.png`} color="#ff4400" />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content={`${withPrefix('/')}img/ft-logo.png`} />
      </Helmet>

      <div>{children}</div>

      <Footer />
    </div>
  )
}

export default TemplateWrapper
