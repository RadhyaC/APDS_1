import React from "react";
import logo from "../logo.svg"
//we import bootstrap to make our appplication look better
import "bootstrap/dist/css/bootstrap.css";
//we import navlink to utilize the react router.
import { NavLink } from "react-router-dom";
//here, displays our navbar
export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink className="navbar-brand" to ="/">
                <img style={{"width" : '25%' }} src={logo} alt="Logo"></img>
                </NavLink>
                <div className="navbar" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <NavLink className="nav-link" to="/">
                          List
                        </NavLink>
                        <NavLink className="nav-link" to="/create">
                          Create Post
                        </NavLink>
                        <NavLink className="nav-link" to="/register">
                          Register
                        </NavLink>
                        <NavLink className="nav-link" to="/login">
                          Login
                        </NavLink>
                    </ul>
                </div>
            </nav>
        </div>
    );
}