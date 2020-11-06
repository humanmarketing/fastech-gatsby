import React from 'react'
import logo from '../../img/ft-logo.png'
import Layout from '../../components/Layout'

export default () => (
  <Layout>
    <div className="thank-you-pg">
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
            <a className="nav-tel" href="tel:714-889-8851" target="_blank" rel="noopener noreferrer">
            714-889-8851
            </a>
        </div>      
        </div>
    </nav> 
    <section className="section section--gradient">
        <div className="container">
            <div className="columns">
                <div className="column is-offset-1 is-10">
                  <h1 className="has-text-weight-semibold is-size-3">
                  Thank you for your submission!
                  </h1>
                  <p> We'll be in touch shortly. If you need immediate assistance, please call us at <a style={{color: 'white'}} className="nav-tel" href="tel:714-889-8851" target="_blank" rel="noopener noreferrer">714-889-8851</a></p>
                </div>                
            </div>   
        </div>
    </section>    
    </div>
  </Layout>
)