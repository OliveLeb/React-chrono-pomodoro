import React from 'react';

const footerStyle = {
  width: '100%',
  textAlign: 'center',
  background: '#f6f7f8',
};
const linkStyle = {
  color: 'black',
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p style={{ margin: '0' }}>
        2020 - By{' '}
        <a
          style={linkStyle}
          href='https://cv.lebelolivier.fr/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Olivier Lebel
        </a>{' '}
        &copy;
      </p>
    </footer>
  );
};

export default Footer;
