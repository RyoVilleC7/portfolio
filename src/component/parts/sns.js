import React from 'react';
import { connect } from 'react-redux';

import TwitterLogo from './t-logo';
import GithubLogo from './g-logo';

const SNS = (props)=>{
    return(
        <div className={"sns-wrap" + " " + (props.path === '/' ? 'elemIn_left' : 'elemOut_left')}>
            <TwitterLogo />
            <GithubLogo />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        path: state.router.location.pathname
    };
};

const mapDispatchToProps = dispatch => {
    return {
}};

export default connect(mapStateToProps,mapDispatchToProps)(SNS);