
import React from 'react';

function Contact() {
    return (
        <div className="contact-page">
            <h2 className="title"><b>CONTACT DETAILS</b></h2>

            <div className="contact-container">

                {/* Contact Card */}
                <div className="ccard">
                    <h3><b>📞 CONTACT US</b></h3>
                    <p>📱 Phone: 1234567890</p>
                    <p>✉️ Email: contact@example.com</p>
                    <p>📍 Address: 123 Main Street, City, Country</p>
                </div>

                {/* Social Media Card */}
                <div className="ccard">
                    <h3><b>🌐 SOCIAL MEDIA</b></h3>
                    <p>📘 Facebook: @Myecomm12</p>
                    <p>📸 Instagram: @Mycomm_012</p>
                    <p>🐦 Twitter: @Mycomm_012</p>
                </div>

            </div>
        </div>
    );
}

export default Contact;
