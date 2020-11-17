import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import logo from '../img/ft-logo.png'
import Layout from '../components/Layout'
import HvacForm from '../components/HvacForm'
import IconText from '../components/IconText'
import PhoneNumber from '../components/PhoneNumber'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'


export const CommercialHvacPageTemplate = ({
  test_AB,
  image,
  title,
  metadescription,
  header,
  subheader,
  herocta,
  description,
  leadingbusiness,
  main,
  pathogenfiltration,
  industriesserved,
  serviceareas,
  bottomcta,
  helmet,
}) => {
  const [isActive, setActive] = useState(false);
  return (
  <div className="content">
    {helmet || ''}
    <nav className="navbar is-transparent" role="navigation" aria-label="main-navigation">
      <div className="container">
        <div className="navbar-brand">
          <a href="http://www.fastechus.com/" className="navbar-item nav-logo" title="Logo">
            <img src={logo} alt="Fastech" style={{ width: '200px' }} />
          </a>
          <p>Commercial HVAC and Refrigeration Services</p>
        </div>
        <div className="navbar-end has-text-centered">
          <p><strong>24/7 SERVICE</strong></p>
          <div className="nav-tel">
            <PhoneNumber number="714-889-8851" />
          </div>
        </div>
      </div>
    </nav>
    <div
      className={`full-width-image-container margin-top-0 hero ${test_AB === 'B' ? 'hero--B' : ''}`}
      style={{ backgroundImage: `url(${ !!image.childImageSharp ? image.childImageSharp.fluid.src : image })`, }}
    >
       <section>
        <div className="container">
            <div className="hero-textbox-wrapper">
              <div className="hero-textbox">
                <h1 className="has-text-weight-semibold is-size-3">{header}</h1>
                <p><strong>{subheader}</strong></p>
                <button className="has-text-weight-bold btn primary-btn" onClick={() => setActive(!isActive)}>
                  {herocta}
                </button>
                <div style={{marginTop:'10px'}} className="tel">
                  <PhoneNumber number="714-889-8851" />
                </div>
                <p>{description}</p>
              </div>
            </div>
        </div>
       </section>
    </div>
    <section className="section section--gradient has-text-white-ter time-for-care">
        <div className="container">
            <div className="columns">
                <div className="column is-offset-1 is-5" style={{display: 'flex', alignItems: 'center',}}>
                  <h3 className="has-text-weight-semibold is-size-3">
                    {main.heading}
                  </h3>
                </div>
                <div className="column is-offset-1 is-5">
                  <p>{main.description}</p>
                  <ul>
                    {main.items.map((item) => (
                      <li key={item} className="is-size-6">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
            </div>
        </div>
    </section>
    <section className="section section--gradient leading-business-wrapper">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1 has-text-centered">
                <div style={{maxWidth: '500px', margin: 'auto'}}>
                  <h2>{leadingbusiness.header}</h2>
                </div>
            </div>
          </div>
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="leading-business">
                <div className="icon-text">
                  <IconText gridItems={leadingbusiness.blurbs} />
                </div>
                <div className="has-text-centered">
                  <button className="has-text-weight-bold btn primary-btn" onClick={() => setActive(!isActive)}>
                    Get Started
                  </button>
                  <p style={{marginTop: '20px'}}>Or give us a call at <span className="nav-tel"><PhoneNumber number="714-889-8851" /></span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {pathogenfiltration && (
      <section className="section section--gradient pathogen-filtration">
        <div className="container">
            <div className="columns">
              <div className="column is-6">
                <div className="pathogen-filtration-text">
                  <h2>{pathogenfiltration.heading}</h2>
                  <h3>{pathogenfiltration.subheading1}</h3>
                  <p>{pathogenfiltration.text1}</p>
                  <h3>{pathogenfiltration.subheading2}</h3>
                  <ul>
                    {pathogenfiltration.items.map((item) => (
                      <li key={item} className="is-size-6">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <h3>{pathogenfiltration.subheading3}</h3>
                  <p>{pathogenfiltration.text3}</p>
                </div>
              </div>
              <div className="column is-6">
                  <div className="image-wrapper"
                    style={{
                      width: '100%',
                      display: 'inline-block',
                    }}
                  >
                    <PreviewCompatibleImage imageInfo={pathogenfiltration.image} />
                  </div>
              </div>
            </div>
        </div>
      </section>
    )}
    <section className="section section--gradient has-text-white-ter industries">
      <div className="container">
          <div className="columns industries-served">
            <div className="column is-3">
              <h2>{industriesserved.heading}</h2>
              <p>{industriesserved.description}</p>
            </div>
            <div className="column is-offset-1 is-4">
              <ul>
                {industriesserved.items1.map((item) => (
                  <li key={item} className="is-size-5">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="column is-4">
              <ul>
                {industriesserved.items2.map((item) => (
                  <li key={item} className="is-size-5">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="columns service-areas">
            <div className="column is-3">
              <h2>{serviceareas.heading}</h2>
            </div>
            <div className="column is-offset-1 is-4">
              <ul>
                {serviceareas.items1.map((item) => (
                  <li key={item} className="is-size-5">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="column is-4">
              <ul>
                {serviceareas.items2.map((item) => (
                  <li key={item} className="is-size-5">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
      </div>
    </section>
    <PreviewCompatibleImage imageInfo={bottomcta.image} />
    <section className="section section--gradient bottom-cta">
      <div className="container">
          <div className="columns">
            <div className="column has-text-centered is-10" style={{maxWidth: '500px', margin:'auto'}}>
              <div className="bottom-cta-text">
                <h2>{bottomcta.header}</h2>
                <p>{bottomcta.subheader} <span className="nav-tel"><PhoneNumber number="714-889-8851" /></span></p>
                <button className="has-text-weight-bold btn primary-btn" onClick={() => setActive(!isActive)}>{bottomcta.cta}</button>
              </div>
            </div>
          </div>
      </div>
    </section>
    <div className="ft-modal">
      <div className="container">
          <div className={`popup-form--wrapper ${isActive ? "is-active" : "" }` }>
            <div className="popup-form--container">
              <button className={`close-button ${!isActive ? " " : "is-active"}` } onClick={() => setActive(!isActive)}>
                <div>X</div>
              </button>
              <div className="container">
                  <div className="popup-form--content">
                    <HvacForm />
                  </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
  )
}

CommercialHvacPageTemplate.propTypes = {
  test_AB: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  header: PropTypes.string,
  metadescription: PropTypes.string,
  subheader: PropTypes.string,
  herocta: PropTypes.string,
  description: PropTypes.string,
  leadingbusiness: PropTypes.shape({
    header: PropTypes.string,
    blurbs: PropTypes.array,
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    items: PropTypes.array,
  }),
  pathogenfiltration: PropTypes.shape({
    heading: PropTypes.string,
    subheading1: PropTypes.string,
    text1: PropTypes.string,
    subheading2: PropTypes.string,
    items: PropTypes.array,
    subheading3: PropTypes.string,
    text3: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  industriesserved: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    items1: PropTypes.array,
    items2: PropTypes.array,
  }),
  serviceareas: PropTypes.shape({
    heading: PropTypes.string,
    items1: PropTypes.array,
    items2: PropTypes.array,
  }),
  bottomcta: PropTypes.shape({
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    header: PropTypes.string,
    subheader: PropTypes.string,
    herocta: PropTypes.string,
  }),
  helmet: PropTypes.object,
}

const CommercialHvacPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <div className="commercial-hvac-pg">
      <Layout>
        <CommercialHvacPageTemplate
          {...frontmatter}
          helmet={
            <Helmet titleTemplate="%s | Fastech">
              <title>{`${frontmatter.title}`}</title>
              <meta name="description" content={`${frontmatter.metadescription}`} />
            </Helmet>
          }
        />
      </Layout>
    </div>
  )
}

CommercialHvacPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default CommercialHvacPage

export const commercialHvacPageQuery = graphql`
  query CommercialHvacPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        test_AB
        title
        metadescription
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        header
        subheader
        herocta
        description
        leadingbusiness {
          header
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 40, quality: 64) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            header
            text
          }
        }
        main {
          heading
          description
          items
        }
        pathogenfiltration {
          heading
          subheading1
          text1
          subheading2
          items
          subheading3
          text3
          image {
            childImageSharp {
              fluid(maxWidth: 608, quality: 64) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        industriesserved {
          heading
          description
          items1
          items2
        }
        serviceareas {
          heading
          items1
          items2
        }
        bottomcta {
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 60) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          header
          subheader
          cta
        }
      }
    }
  }
`
