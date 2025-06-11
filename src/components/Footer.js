import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer bg-dark text-white text-center py-4">
      <div className="container">
        <p>Connect with me</p>
        <div className="social-icons">
          <a href="https://github.com/Hrishi-10k" target="_blank" rel="noreferrer" className="text-white mx-2">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/hrishi-10k/" target="_blank" rel="noreferrer" className="text-white mx-2">
            <FaLinkedin size={24} />
          </a>
          <a href="https://x.com/hrishi_10k" target="_blank" rel="noreferrer" className="text-white mx-2">
            <FaTwitter size={24} />
          </a>
        </div>
        <p className="mt-2 mb-0">© {new Date().getFullYear()} Hrishi. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
