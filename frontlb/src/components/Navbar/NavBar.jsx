import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faNewspaper, faBook, faCalendar } from '@fortawesome/free-solid-svg-icons';
import Calendario from "./Cal.pdf"
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" height="30" className="d-inline-block align-top"/>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" href="#"><FontAwesomeIcon icon={faHome} /> Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><FontAwesomeIcon icon={faNewspaper} /> Noticias</a>
            </li>
            <li className="nav-item" >
              <a className="nav-link" href="#"><FontAwesomeIcon icon={faBook} /> LibraryClassApp</a>
            </li>
            <li className="nav-item">
              <a className="nav-link"download href={Calendario}><FontAwesomeIcon icon={faCalendar} /> Calendario</a>
            </li>
          </ul>
          <button className="btn btn-custom">Área do Usuário</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
