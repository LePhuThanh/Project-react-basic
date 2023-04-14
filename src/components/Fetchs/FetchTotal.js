import React from "react";
import FetchNav from "../../views/Nav/FetchNav";
import CasualFetch from "./CasualFetch";
import ArGridFetch from "./ArGridFetch";
import '../../styles/Fetchs/FetchTotal.scss'


import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";



class FetchTotal extends React.Component {
    render() {
        return (
            <Router>
                <div className="fetch-total-container">
                    <h1>Ways To Fetch The Data</h1>
                    <FetchNav />
                    <Switch>
                        <Route path="/casualfetch" exact>
                            <CasualFetch />
                        </Route>
                        <Route path="/argridfetch" >
                            <ArGridFetch />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default FetchTotal;