import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    console.log(formData);
  };

  return (
    <div className="contact-container">
      <h2 className="contact-heading">📬 Get in Touch with Us</h2>

      <div className="contact-content">
        <div className="form-section">
          {isSubmitted ? (
            <div className="thank-you-message">
              <h3>🎉 Thank you for reaching out! We'll get back to you soon.</h3>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div className="form-group">
                <button type="submit" className="submit-btn">📨 Send Message</button>
              </div>
            </form>
          )}
        </div>

        <div className="info-section">
          <h3>📌 Contact Information</h3>
          <p>
            📞 Phone: <a href="tel:7538892222" className="contact-link">7538892222</a>
          </p>
          <p>
            📧 Email: <a href="mailto:bharathdharmendiran2002@gmail.com" className="contact-link">
              bharathdharmendiran2002@gmail.com
            </a>
          </p>
          <p>📍 Address: 123 Mariyamman Kovil, Thanjavur - 613501</p>

          <div className="social-media">
            <h4>🌐 Follow Us</h4>
            <a href="https://facebook.com/bharath bharath" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com/@Bharath74057779" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://instagram.com/itz_bhara_th" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>

          <div className="map-container">
            <h3>📍 Find Us Here</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.012540727329!2d79.127934!3d10.782126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baab8d80f56767f%3A0x7e85cf98b32991c0!2sMariyamman%20Kovil%2C%20Thanjavur%2C%20Tamil%20Nadu%20613501!5e0!3m2!1sen!2sin!4v1684395814271!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Map - Mariyamman Kovil"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
