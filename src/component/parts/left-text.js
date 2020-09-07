import React from 'react';
import MediaQuery from 'react-responsive';
import { connect } from 'react-redux';

const LeftText = (props)=>{
    return(
        <div className={"left-text-wrap" + " " + (props.path === '/' ? 'elemIn_left' : 'elemOut_left')} id="leftText">
            <div className="sidebar"></div>
            <span className="left-main-text">I provide the <MediaQuery query="(max-width: 599px)"><br/></MediaQuery>Good Work.</span>
            <span className="left-sub-text">Portfolio 2021</span>
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

export default connect(mapStateToProps,mapDispatchToProps)(LeftText);