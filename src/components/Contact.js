import React from 'react';

function Contact() {
  return (
    <div className="container my-5">
      <h2>Contact Me</h2>
      <form action="https://formspree.io/f/xanjoqyq" method="POST">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" name="name" className="form-control" placeholder="Your Name" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" name="email" className="form-control" placeholder="Your Email" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea name="message" className="form-control" rows="5" placeholder="Your Message" required></textarea>
        </div>
        <button type="submit" className="btn btn-success">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
