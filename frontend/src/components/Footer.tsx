import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            Hobby project for finding the best animal food for your pets.
          </p>
          <p>
            Contact: contact@kibblecruncher.com
          </p>
          <p>
            Affilaite links are used to support the hosting of this website
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} KibbleCruncher</p>
      </div>
    </footer>
  );
};

export default Footer;
