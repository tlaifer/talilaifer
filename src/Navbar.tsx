import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav>
      <Link to="/">home</Link>
      <Link to="/experience">experience</Link>
    </nav>
  );
};

export default Navbar;
