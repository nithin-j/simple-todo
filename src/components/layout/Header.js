import React from 'react';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Simple To Do</h1>
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
export default Header;
