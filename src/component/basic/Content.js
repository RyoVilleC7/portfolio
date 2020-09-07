//react
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

//router
import {
    BrowserRouter as Router, 
    Route, 
    Switch, 
    Link, 
    withRouter
} from 'react-router-dom';

import Home from './Home';
import About from './About';

const Content = (props)=>{

    return(
        <main id="container">
            <div className="_content">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                </Switch>
            </div>
        </main>
    )
}

const mapStateToProps = state => {
    return {
        ws: state.interactionReducer.windowSize,
        screenOutState: state.initReducer.screenOut
    };
};

const mapDispatchToProps = dispatch => {
    return {
}};

export default connect(mapStateToProps,mapDispatchToProps)(Content);