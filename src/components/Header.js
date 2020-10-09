import React from "react";
import { RiVirusLine } from "react-icons/ri";
import "../styles/Header.css";

const Header = () => {
  return (
    <header>
      <div>
        <RiVirusLine className="virusIcon" />
      </div>
      <h1>COVID-19 API</h1>
    </header>
  );
};

export default Header;
