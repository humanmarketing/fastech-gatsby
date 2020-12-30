import React from 'react'
// import { navigate } from 'gatsby-link'

// function encode(data) {
//     return Object.keys(data)
//         .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
//         .join('&')
// }

/* eslint-disable */

export default class HvacForm extends React.Component {
    constructor(props) {
    super(props)
        this.state = { isValidated: false }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
    return (
        <section className="section" style={{padding: '0'}}>
            <div id="mc_embed_signup">
                <form action="https://fastechus.us2.list-manage.com/subscribe/post?u=1b5912a7a12178df95b8ef6cc&amp;id=f0c1cabfde" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" data-netlify="true" data-netlify-honeypot="bot-field" noValidate>
                    {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                    <input type="hidden" name="form-name" value="contact" />
                    <div hidden>
                        <label>
                        Don’t fill this out:{' '}
                        <input name="bot-field" onChange={this.handleChange} />
                        </label>
                    </div>
                    <div id="mc_embed_signup_scroll">
                    <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
                    <div className="mc-field-group size1of2">
                        <label htmlFor="mce-FNAME">First Name <span className="asterisk">*</span></label>
                        <input type="text"  name="FNAME" className="required" id="mce-FNAME" onChange={this.handleChange} required={true} />
                    </div>
                    <div className="mc-field-group size1of2">
                        <label htmlFor="mce-LNAME">Last Name <span className="asterisk">*</span></label>
                        <input type="text"  name="LNAME" className="required" id="mce-LNAME" onChange={this.handleChange} required={true}/>
                    </div>
                    <div className="mc-field-group size1of2">
                        <label htmlFor="mce-PHONE">Phone Number <span className="asterisk">*</span></label>
                        <input type="text" name="PHONE" className="required"  id="mce-PHONE" onChange={this.handleChange} required={true} />
                    </div>
                    <div className="mc-field-group size1of2">
                        <label htmlFor="mce-EMAIL">Email Address <span className="asterisk">*</span></label>
                        <input type="email"  name="EMAIL" className="required email" id="mce-EMAIL" onChange={this.handleChange} required={true} />
                    </div>
                    <div className="mc-field-group">
                        <label htmlFor="mce-COMPANY">Company </label>
                        <input type="text"  name="COMPANY" className="" id="mce-COMPANY" onChange={this.handleChange}/>
                    </div>
                    <div className="mc-field-group">
                        <label htmlFor="mce-ZIPCODE">Zip Code </label>
                        <input type="text" name="ZIPCODE" className="" id="mce-ZIPCODE" onChange={this.handleChange}/>
                    </div>
                    <div className="mc-field-group">
                        <label htmlFor="mce-MMERGE5">Services Needed: </label>
                        <select name="MMERGE5" className="" id="mce-MMERGE5">
                            <option ></option>
                            <option value="HVAC">HVAC</option>
                            <option value="Refrigeration">Refrigeration</option>
                            <option value="Unit Replacement">Unit Replacement</option>
                            <option value="New Contruction">New Contruction</option>
                        </select>
                    </div>
                    <div id="mce-responses" className="clear">
                        <div className="response" id="mce-error-response" style={{display: 'none'}}></div>
                        <div className="response" id="mce-success-response" style={{display: 'none'}}></div>
                    </div>
                    <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_1b5912a7a12178df95b8ef6cc_f0c1cabfde" tabIndex="-1" /></div>
                    <div className="clear"><input type="submit" value="Submit" name="subscribe" id="mc-embedded-subscribe" className="submit-btn"/></div>
                    </div>
                </form>
            </div>
        </section>
    )
    }
}
