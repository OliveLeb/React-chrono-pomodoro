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
    <div style={footerStyle}>
      <p>
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
    </div>
  );
};

export default Footer;
