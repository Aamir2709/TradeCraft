import React from "react";
import "./ContactPage.css";

const locations = [
  {
    position: { lat: 19.1738, lng: 72.956 }, // Mumbai
  },
  {
    position: { lat: 13.3531, lng: 74.785 }, // Manipal
  },
];

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with our team for inquiries and support</p>
        </div>
      </div>

      {/* Contact Section - Now Full Width */}
      <section className="contact-section section" style={{ paddingBottom: "0" }}>
        <div className="container">
          <div className="contact-content-wrapper">
            {/* Full Width: Contact Info & Map */}
            <div className="contact-info-column">
              <div className="contact-info-card">
                <h2>Get in Touch</h2>

                <div className="info-blocks-wrapper">
                  <div className="info-block">
                    <div className="info-icon">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div className="info-content">
                      <h3>Maharashtra Office</h3>
                      <p>
                        <a href ="https://maps.app.goo.gl/PCS71F5oceQjBVs36" target="_blank">
                        513, 5th Floor, Shree Samart Plaza, Gupta Bhavan,
                        RRT Road, Opp. Mulund West Railway Station,
                        Mumbai 400080
                        </a>
                      </p>
                    <div className="mini-map">
                     <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d775.2968399420402!2d72.95489065193813!3d19.17197551518075!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9d13ceb3aed%3A0x51151a1033088d18!2sShree%20Samarth%20Plaza!5e1!3m2!1sen!2sin!4v1763905023919!5m2!1sen!2sin"
                        height="250"
                        style={{ border: 0, borderRadius: "8px" }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Maharashtra Office Location"
                      />
                    </div>
                    </div>
                  </div>

                  <div className="info-block">
                    <div className="info-icon">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div className="info-content">
                      <h3>Karnataka Office</h3>
                      <p>
                        <a href ="https://maps.app.goo.gl/mc7J1QxbCYccL54M9" target="_blank">
                        GRACE, 265-4(3), Mangala Colony, Off Alevoor Road,
                        Manipal, Udupi District, Karnataka 576104
                        </a>
                      </p>
                    <div className="mini-map">
                     <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1597.368813224956!2d74.78847552188181!3d13.337034124589108!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbca50060981bc9%3A0xd6b03fcb43324247!2sMangala%20Colony%20%2C%202nd%20Cross!5e1!3m2!1sen!2sin!4v1763905259089!5m2!1sen!2sin"
                        height="250"
                        style={{ border: 0, borderRadius: "8px" }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Maharashtra Office Location"
                      />
                    </div>
                    </div>
                  </div>

                  <div className="contact-details-grid">
                    <div className="info-block contact-detail-item">
                      <div className="info-icon">
                        <i className="fas fa-phone-alt"></i>
                      </div>
                      <div className="info-content">
                        <h3>Phone</h3>
                        <p>
                          <a href="tel:+919819830716">Mobile: +91 9819830716</a>
                        </p>
                        <p>
                          <a href="tel:+918202575200"> Tel: 0820-2575200</a>
                        </p>
                      </div>
                    </div>

                    <div className="info-block contact-detail-item">
                      <div className="info-icon">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <div className="info-content">
                        <h3>Email</h3>
                        <p>
                          <a href="mailto:trading@tradecraft.co.in">
                            trading@tradecraft.co.in
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="info-block contact-detail-item">
                      <div className="info-icon">
                        <i className="fas fa-clock"></i>
                      </div>
                      <div className="info-content">
                        <h3>Working Hours</h3>
                        <p>Mon – Fri: 9:00 AM – 6:00 PM</p>
                        <p>Sat: 10:00 AM – 4:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section - Now Full Width and Below Contact with reduced spacing */}
      <section className="about-section section">
        <div className="container">
          <div className="about-content-wrapper">
            <div className="about-summary-card">
              <h2>About Tradecraft</h2>
              <div className="about-summary-content">
                <p className="company-intro">
                  TradeCraft is a newly established venture, bringing
                  decades of experience in international trade and export
                  operations. With a strong farmer network, modern
                  logistics, and a quality-first mindset, we serve all
                  global destinations.
                </p>
                
                <div className="info-boxes-container">
                  <div className="company-mission">
                    <h3>Our Mission</h3>
                    <p>
                      We aim to create sustainable value chains that benefit farmers, 
                      processors, and consumers alike. By focusing on quality products 
                      and ethical business practices, we're building trade relationships 
                      that last for generations.
                    </p>
                  </div>
                  
                  <div className="company-vision">
                    <h3>Our Vision</h3>
                    <p>
                      To become the leading agricultural export company known for 
                      connecting premium Indian produce with global markets while 
                      empowering local farming communities through fair trade practices 
                      and sustainable agricultural methods.
                    </p>
                  </div>
                  
                  <div className="company-expertise">
                    <h3>Our Expertise</h3>
                    <p>
                      With specialized knowledge in quality control, international 
                      logistics, and regulatory compliance, we handle every aspect of 
                      the export process. Our team's extensive experience ensures 
                      smooth operations from farm to international destination.
                    </p>
                  </div>
                </div>
                
                <div className="value-tags">
                  <span>Quality</span>
                  <span>Integrity</span>
                  <span>Sustainability</span>
                  <span>Innovation</span>
                  <span>Partnership</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;