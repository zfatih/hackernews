import React from 'react';
import {Link, NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="orange" role="navigation">
            <div className="nav-wrapper container">
            
            <Link id="logo-container" to="/" className="brand-logo">Hacker News</Link>
            
            <ul className="right hide-on-med-and-down">
                <li><NavLink to="/newest">New</NavLink></li>
                <li><NavLink to="/newcomments">Comments</NavLink></li>
                <li><NavLink to="/show">Show</NavLink></li>
                <li><NavLink to="/ask">Ask</NavLink></li>
                <li><NavLink to="/jobs">Jobs</NavLink></li>
            </ul>

            <ul id="nav-mobile" className="sidenav">
                <li><NavLink to="/newest">New</NavLink></li>
                <li><NavLink to="/newcomments">Comments</NavLink></li>
                <li><NavLink to="/show">Show</NavLink></li>
                <li><NavLink to="/ask">Ask</NavLink></li>
                <li><NavLink to="/jobs">Jobs</NavLink></li>
            </ul>
            <Link to="/" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
            </div>
        </nav>
    )
}

export default Navbar;