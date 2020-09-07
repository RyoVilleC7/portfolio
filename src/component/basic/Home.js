//react
import React, { useEffect } from 'react';

//router
import { push } from 'connected-react-router'
import { connect } from 'react-redux';

//component
import { beforeMove, afterMove, getTitle, animationTime, cv_out, scrollGo } from '../../functions/function';
import { pageTransition } from '../../store/actionCreater';

const Home = (props)=>{
    
    useEffect(()=>{
        scrollTo(0,0);
        if(props.screenOutState){
            getTitle();
        };
        afterMove();
    },[]);

    const pageMoveAbout = (e)=>{

        e.preventDefault();
    
        if(!props.pageTransitionState){
    
            const url = location.pathname;
            if(!(url === '/about')){
        
                props.pageTransition();
        
                setTimeout(() => {
                    props.pushURLAbout();
                    props.pageTransition();
                    if(window.innerWidth > 420){
                        scrollGo();
                    }
                }, animationTime);
        
                cv_out();
                beforeMove();
            };
        }
    }

    return(
        <section id="home" style={{width: props.ws.w, height: props.ws.h}}>
            <div id="home_inner">
                <div id="textWrap"></div>
                <div id="textWrap2"></div>
                <div className="btn_wrapper" id="btnWrapper">
                    <div className="title_border"></div>
                    <button onClick={pageMoveAbout}>About Me</button>
                </div>
            </div>
        </section>
    )
}

const mapStateToProps = state => {
    return {
        firstLoadState: state.initReducer.firstLoad,
        screenOutState: state.initReducer.screenOut,
        pageTransitionState: state.interactionReducer.pageTransition,
        ws: state.interactionReducer.windowSize
    };
};

const mapDispatchToProps = dispatch => {
    return {
        pushURLAbout: ()=>{dispatch(push('/about'))},
        pageTransition: ()=>{dispatch(pageTransition())}
}};

export default connect(mapStateToProps,mapDispatchToProps)(Home);