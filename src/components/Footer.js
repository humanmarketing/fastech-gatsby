import React from 'react'
import logo from '../img/ft-logo.png'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">        
        <div className="content">
          <div className="container">
            <div style={{ maxWidth: '100vw' }} className="columns">
              <div className="column is-4">
                <section className="menu">
                <img src={logo} alt="Fastech" style={{ width: '200px' }} />  
                </section>
              </div>
              <div className="column is-8">
                <section>
                  <p>Founded in 1998 in Buena Park, CA, FASTECH has helped thousands of clients over their 20+ year history. From design and permitting to new construction, facility maintenance, compliance testing and system upgrades, FASTECH has built a nationally recognized and trusted industry reputation for responsive, experienced service and cutting edge technology.</p>
                </section>
              </div>              
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
