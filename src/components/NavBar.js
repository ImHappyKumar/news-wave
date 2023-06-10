import React from 'react';
import logo from '../assets/logo.png';
import { NavLink, Link } from 'react-router-dom'; // NavLink used for automatically adding 'active' class while nav-link is active

 const NavBar = (props) => {
  return (
      <nav className="navbar fixed-top navbar-dark bg-dark navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="NewsWave" style={{width: '42px', marginLeft: '2px'}} />
        </Link>
        <Link className="navbar-brand" to="/"> {props.brandName} </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Category
              </Link>
              <ul className="dropdown-menu bg-dark">
                <li><NavLink className="nav-link" to="/business">Business</NavLink></li>
                <li><NavLink className="nav-link" to="/entertainment">Entertainment</NavLink></li>
                <li><NavLink className="nav-link" to="/general">General</NavLink></li>
                <li><NavLink className="nav-link" to="/health">Health</NavLink></li>
                <li><NavLink className="nav-link" to="/science">Science</NavLink></li>
                <li><NavLink className="nav-link" to="/sports">Sports</NavLink></li>
                <li><NavLink className="nav-link" to="/technology">Technology</NavLink></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;