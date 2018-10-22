import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light mb-4">
      <Link className="navbar-brand" to="/">
        Checkout 51
      </Link>
    </nav>
  );
};

export default Navbar;
