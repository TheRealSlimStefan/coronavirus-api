import React from "react";
import { Link } from "react-router-dom";
import { GoGlobe, GoLocation } from "react-icons/go";
import "../styles/Navigation.css";

const Navigation = () => {
  return (
    <nav>
      <Link to="/global">
        <GoGlobe />
      </Link>
      <Link to="/location">
        <GoLocation />
      </Link>
    </nav>
  );
};

export default Navigation;
