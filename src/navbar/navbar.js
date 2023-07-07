import React from "react";
import './navbar.css'

export default function Nav() {

  return(
  <>
  <div className="sidebar">
    <nav>
      <ul className="buttonlist">
      <li>
          <a href='/'>
            <button className="navbutton" >Home</button></a>
        </li>
        <li>
          <a href='/projects'>
            <button className="navbutton">Projects</button></a>
        </li>
      </ul>
    </nav>
  </div>
  </>
  );
}