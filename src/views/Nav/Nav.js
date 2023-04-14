import React from "react";
import '../../styles/Nav/Nav.scss'
import {
    NavLink
} from "react-router-dom";

class Nav extends React.Component {
    render() {
        //e.preventDefault() // not reloading my page
        return (
            <div className="topnav">
                <NavLink to="/" activeClassName="active" exact={true}>
                    {/* When we enter the Home page which will add 'active' class   */}
                    Home
                </NavLink>
                <NavLink to="/todo" activeClassName="active">
                    Todo
                </NavLink>
                <NavLink to="/about" activeClassName="active">
                    About
                </NavLink>
                <NavLink to="/user" activeClassName="active">
                    Users
                </NavLink>
                <NavLink to="/fetchtotal" activeClassName="active">
                    Fetch The Data
                </NavLink>

                {/* <a href="#about">About</a> */}
            </div>
        )
    }
}

export default Nav;
