import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <ul className="flex justify-center font-bold my-10">
      <li className="mr-10 cursor-pointer">
        <Link to="/">Home</Link>
      </li>
      <li className="mr-10 cursor-pointer">
        <Link to="/table">Personas</Link>
      </li>
      <li className="mr-10 cursor-pointer">
        <Link to="/form">Formulario</Link>
      </li>
    </ul>
  );
};

export default Header;
