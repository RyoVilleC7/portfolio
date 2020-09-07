import React from 'react';
import { connect } from 'react-redux';

const Canvas = (props)=>{
    return(
        <div id="WebGL-output" className={props.path === '/' ? '' : 'cv_out'}></div>
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

export default connect(mapStateToProps,mapDispatchToProps)(Canvas);