import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Footer = (props) => {
  return (
    <footer className='bg-dark'>
      <div className="container py-3">
        <div className="row text-light mt-3">
        <div className="col-md">
            <div className="d-flex align-items-center" style={{fontSize: '20px', fontWeight: '500'}}>
              <img src={logo} alt="NewsWave" style={{width: '42px', marginRight: '10px'}} /> {props.brandName}
            </div> 
            <p>Get all the latest news at one place, just a touch away!</p>
            <p>Copyright &copy; 2023 NewsWave</p>
            <p>Developed By <a className="pointer text-decoration-none text-light footer-link" href="https://happykumar.tk/" target="_blank" rel="noreferrer">Happy Kumar</a></p>
          </div>
          <div className="col-md-3 mt-4 mt-md-0">
            <h4 style={{fontWeight: 'normal'}}>Quick Links</h4>
            <Link className="nav-link footer-link my-1" to="/business">Business</Link>
            <Link className="nav-link footer-link my-1" to="/entertainment">Entertainment</Link>
            <Link className="nav-link footer-link my-1" to="/general">General</Link>
            <Link className="nav-link footer-link my-1" to="/health">Health</Link>
            <Link className="nav-link footer-link my-1" to="/science">Science</Link>
            <Link className="nav-link footer-link my-1" to="/sports">Sports</Link>
            <Link className="nav-link footer-link my-1" to="/technology">Technology</Link>
          </div>

        </div>
          
      </div>
    </footer>
  )
}

export default Footer;