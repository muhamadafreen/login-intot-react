import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
       <div className="container-fluid nav-container  ">
                <div className="navbarc">
                    <nav className="navbar navbar-expand-lg navbar-dark  ">
                        <a className="navbar-brand "><span className="brand">iNTOT</span></a>
                        <div className="navlogin">
                            <ul className="navbar-nav ">
                            <li className="nav-item ">
                                <Link to="/login" className="nav-link" >
                                        <img src="images/login.png" alt=""/>
                                        <span>Login</span>
                                </Link> 

                            </li>
                                <li className="nav-item">
                                    <Link to="/signup" className="nav-link" >
                                        <img src="images/signup.png" alt=""/>
                                        <span>Sign Up</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="">
                                        <img src="images/search-icon.png" alt="search-icon"/>
                                    </a>
                                </li>
                                
                            </ul>
                            <a className="menulist" onclick="openNav()">
                                    <button>
                                        <img src="images/menu.png" alt="menu"/>
                                        
                                    </button>
                                </a>
                            
                        </div>

                    </nav>

                </div>
            </div>
    </header>
  );
}

export default Header;
