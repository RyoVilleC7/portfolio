//react
import React,{ useEffect } from 'react';
import MediaQuery from 'react-responsive';

//router
import { push } from 'connected-react-router'
import { connect } from 'react-redux';

//component
import SNS from '../parts/sns';
import LeftText from '../parts/left-text';
import MenuBtn from './MenuBtn';
import SoundBtn from '../parts/soundBtn';
import ScrollBar from '../parts/scrollBar';
import { beforeMove, animationTime, cv_in } from '../../functions/function';
import { pageTransition } from '../../store/actionCreater';

const Header = (props)=>{
    
    const pageMoveHome = (e)=>{
        e.preventDefault();
        setTimeout(()=>{
            scrollTo(0,0);
        },300)

        if(!props.pageTransitionState){
            const url = location.pathname;
            if(!(url === '/')){
                props.pageTransition();
                setTimeout(() => {
                    props.pushURLHome();
                    props.pageTransition();
                    document.querySelectorAll('body')[0].removeAttribute('style');
                }, animationTime);
                
                cv_in();
                beforeMove();
            };
        }
    }

    return(
        <header style={{width: props.ws.w, height: props.ws.h}}>

            <div className="header-content-wrap">

            <div className="top-content-wrap">
                <h1 className="logo">
                    <a href="/" className="hov" onClick={pageMoveHome}>RYOTARO HADA</a>
                </h1>
                <MenuBtn />
            </div>

            
                <div className="middle-content-wrap">
                    <MediaQuery query="(min-width: 600px)">
                        <LeftText />
                    </MediaQuery>
                    <ScrollBar />
                </div>

            <div className="bottom-content-wrap">

                <MediaQuery query="(min-width: 600px)">
                    <SNS />
                </MediaQuery>

                <MediaQuery query="(max-width: 599px)">
                    <LeftText />
                </MediaQuery>

                <SoundBtn />
            </div>

            </div>
        </header>
    )
}

const mapStateToProps = state => {
    return {
        ws: state.interactionReducer.windowSize
    };
};

const mapDispatchToProps = dispatch => {
    return {
        pushURLHome: ()=>{dispatch(push('/'))},
        pageTransition: ()=>{dispatch(pageTransition())}
}};

export default connect(mapStateToProps,mapDispatchToProps)(Header);