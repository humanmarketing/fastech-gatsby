import React, { useState } from 'react'
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
  hero_image,
  header,
  subheader,
  herocta,
  description,
  main,
  leadingbusiness,
  pathogenfiltration,
  industriesserved,
  serviceareas,
  bottomcta,
  helmet,
}) => {
  const [isActive, setActive] = useState(false);

  return <>
  <div className="content">
    {helmet || ''}
    <nav className="navbar is-transparent" role="navigation" aria-label="main-navigation">
      <div className="container">
        <div className="navbar-brand">
          <a href="http://www.fastechus.com/" className="navbar-item nav-logo" title="Logo">
            <img src={logo} alt="Fastech" style={{ width: '200px' }} />
          </a>
          <p>{header}</p>
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
      style={{ 'background-image': `url(${ !!hero_image.childImageSharp
        ? hero_image.childImageSharp.fluid.src
        : hero_image
      })` }}
    >
       <section>
        <div className="container">
            <div className="hero-textbox-wrapper">
              <div className="hero-textbox">
                <h1 className="has-text-weight-semibold is-size-3">{header}</h1>
                <p>{subheader}</p>
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
                  <h3>{main.heading}</h3>
                </div>
                <div className="column is-offset-1 is-5">
                  <p>{main.description}</p>
                  <ul>
                    {main.items.map((item) => (
                      <li key={item} className="has-text-weight-bold is-size-6">
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
              <h2>{leadingbusiness.header}</h2>
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
              <div className="column is-4 has-text-centered" style={{ margin: '0 auto' }}>
                <h2>{pathogenfiltration.heading}</h2>
              </div>
            </div>
            <div className="columns">
              <div className="column is-6">
                <div className="pathogen-filtration-text">
                  <div>
                    <h3>{pathogenfiltration.subheading1}</h3>
                    <p dangerouslySetInnerHTML={{ __html: pathogenfiltration.text1 }}></p>
                    <h3>{pathogenfiltration.subheading2}</h3>
                    <ul>
                      {pathogenfiltration.items.map((item) => (
                        <li key={item} className="is-size-6 has-text-weight-bold">
                          {item}
                        </li>
                      ))}
                    </ul>
                    <h3>{pathogenfiltration.subheading3}</h3>
                    <p>{pathogenfiltration.text3}</p>
                  </div>
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
            {pathogenfiltration.cta_label && (
              <div className="columns pathogen-filtration-cta">
                <div className="column is-8" style={{ margin: '0 auto', justifyContent: 'center' }}>
                  <div className="has-text-centered">
                    <h2>{pathogenfiltration.cta_label}</h2>
                    <div className="tel has-text-weight-bold">
                      <PhoneNumber number="714-889-8851" />
                    </div>
                  </div>
                </div>
              </div>
            )}
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
                  <li key={item} className="is-size-5">{item}</li>
                ))}
              </ul>
            </div>
            <div className="column is-4">
              <ul>
                {industriesserved.items2.map((item) => (
                  <li key={item} className="is-size-5">{item}</li>
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
                  <li key={item} className="is-size-5">{item}</li>
                ))}
              </ul>
            </div>
            <div className="column is-4">
              <ul>
                {serviceareas.items2.map((item) => (
                  <li key={item} className="is-size-5">{item}</li>
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

  {/* <!-- Start of HubSpot Embed Code --> */}
  <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/9180180.js"></script>
  {/* <!-- End of HubSpot Embed Code --> */}
  </>
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

export default CommercialHvacPage

export const commercialHvacPageQuery = graphql`
  query CommercialHvacPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        test_AB
        title
        metadescription
        hero_image {
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
        main {
          heading
          description
          items
        }
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
          cta_label
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
