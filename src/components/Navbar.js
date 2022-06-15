import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navClass">
      <h1 className="pageTitle">Math Magicians</h1>

      <Link to="/" className="try">
        Home
      </Link>
      <Link to="/calculator" className="try">
        Calculator
      </Link>
      <Link to="/quote" className="try borderRemove">
        Quote
      </Link>
    </nav>
  );
}
export default Navbar;
