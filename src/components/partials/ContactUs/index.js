import React from 'react';
const ContactUs = () => (
  <section className="page-section" id="contactus">
    <div className="section-container">
      <div className="header">
        Get in touch !
      </div>
      <br/><br/><br/>
      <div className="grey-text" style={{ fontSize: '1.4em' }}>
        <div>
          <b> Email:</b> support@redpanda.com
        </div>
        <br/>
        <div>
          <b> Phone:</b> +91 888-777-6543
        </div>
        <br/>
        <div>
          <b> Address:</b> Pune, Maharashtra, India
        </div>
        <br/>
        <div className="flex flex-center">
          <input type="email" placeholder="Write your email" style={{ width: '20%' }}/>
          <button className="app-btn">Subscribe</button>
        </div>
      </div>
    </div>
  </section>
);

export default ContactUs;
