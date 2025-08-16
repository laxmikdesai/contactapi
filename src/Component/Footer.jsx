import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      background: '#007bff',
      color: 'white',
      padding: '10px',
      textAlign: 'center',
      marginTop: '20px'
    }}>
      <p>© {new Date().getFullYear()} Juno Contact App. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
