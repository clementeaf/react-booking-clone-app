import { Link } from "react-router-dom";
import {GiHamburgerMenu} from 'react-icons/gi';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";
import { useState, useContext } from 'react';
import { AuthContext } from './../../context/AuthContext';

const NavBar = () => {
  const [state, setState] = useState(false)

  const { user } = useContext(AuthContext);

  const handleChange = (e) => {
    e.preventDefault();
    setState(!state)
  }


  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{color:"inherit", textDecoration: 'none'}}>
          <div className="logo-container">
            <span className="logo">Iam</span><h2 className="Logo-2">Booking</h2>
          </div>
        </Link>

        {user ? user.username : ( 
          <div className="navItems">
              <button className="navButton-reg">Register</button>
              <button className="navButton-log">Login</button>
              <GiHamburgerMenu color="#003580" onClick={handleChange} className="burger"/>
          </div>
        )}
      </div>
      {/* ItemList */}
      <div className={state ? "headerList" : "headerList close" }>
        <div className="headerListItem">
          <FontAwesomeIcon icon={faBed} color="#003580" className="icon" />
        </div>
        <div className="headerListItem">
          <FontAwesomeIcon icon={faPlane} color="#003580" className="icon" />
        </div>
        <div className="headerListItem">
          <FontAwesomeIcon icon={faCar} color="#003580" className="icon" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;