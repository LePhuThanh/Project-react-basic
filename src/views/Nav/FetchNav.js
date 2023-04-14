import React from "react";
import {
    NavLink
} from "react-router-dom";
import '../../styles/Nav/FetchNav.scss'


class FetchNav extends React.Component {
    render() {
        return (
            <div className="fetch-nav">
                <NavLink to="/casualfetch" activeClassName="active" exact={true}>
                    {/* When we enter the Home page which will add 'active' class   */}
                    Using the Axios library
                </NavLink> <br></br>
                <NavLink to="/argridfetch" activeClassName="active">
                    Using the Ar-Grid plugin
                </NavLink>
            </div>
        )
    }
}

export default FetchNav;