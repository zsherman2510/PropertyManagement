import React from 'react';

const Footer = () => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <footer className="footer text-center p-3">
      <div className="container">
        <p className="footer-text">
          Copyright
          &copy; {currentDate} Property Management
        </p>
      </div>
    </footer>
  );
};

export default Footer;
