import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Simple To Do</h1>
      <Link to='/' style={linkStyle}>
        Home
      </Link>{' '}
      ||{' '}
      <Link to='/About' style={linkStyle}>
        About
      </Link>
    </header>
  );
}

const headerStyle = {
  background: '#4c5769',
  color: '#bcc6d6',
  textAlign: 'center',
  padding: '3px',
  margin: '5px 10% 5px 10%',
};

const linkStyle = {
  color: '#bcc6d6',
  textDecoration: 'none',
};
export default Header;
