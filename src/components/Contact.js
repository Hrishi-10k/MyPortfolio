function Contact() {
  return (
    <div className="container mt-5" id="contact">
      <h2 className="mb-4">Contact Me</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" placeholder="Your Name" />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" placeholder="Your Email" />
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea className="form-control" rows="4" placeholder="Your Message"></textarea>
        </div>
        <button type="submit" className="btn btn-success">Send Message</button>
      </form>
    </div>
  );
}
export default Contact;
