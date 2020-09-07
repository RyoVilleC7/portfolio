//react
import React, {useEffect} from 'react';

//router
import { push } from 'connected-react-router'

//redux
import { connect } from 'react-redux';

import { pageTransition } from '../../store/actionCreater';
import { beforeMove, afterMove, animationTime, cv_out, scrollGo } from '../../functions/function';

const MenuBtn = (props)=>{

const pageMoveAbout = (e)=>{

    e.preventDefault();

    if(!props.pageTransitionState){

        const url = location.pathname;
        const elem = document.getElementById('leftText');

        if(!(url === '/about')){
    
            props.pageTransition();
    
            setTimeout(() => {
                props.pushURLAbout();
                props.pageTransition();
                scrollGo();
            }, animationTime);
    
            cv_out();
            beforeMove();
        };
    }
}

const pageMoveWork = (e)=>{

    e.preventDefault();

    if(!props.pageTransitionState){

    const url = location.pathname;
    if(!(url === '/work')){

        props.pageTransition();

        setTimeout(() => {
            props.pushURLWork();
            props.pageTransition();
        }, animationTime);

        cv_out();
        beforeMove();
        
    };
    }
}
    
const pageMoveBlog = (e)=>{

    e.preventDefault();

    if(!props.pageTransitionState){

    const url = location.pathname;
    if(!(url === '/blog')){

        props.pageTransition();

        setTimeout(() => {
            props.pushURLBlog();
            props.pageTransition();
            document.querySelectorAll('body')[0].removeAttribute('style');
        }, animationTime);
        
        cv_out();
        beforeMove();

    }
    };
}

    return(
        <nav>
            <ul>
                <li><a href="/about" className="first-text hov" onClick={pageMoveAbout}>ABOUT</a></li>
                <li><a href="https://qiita.com/ryotarohada" target="_blank" className="hov">QIITA</a></li>
            </ul>
        </nav>
    )
}

const mapStateToProps = state => {
    return{
        pageTransitionState: state.interactionReducer.pageTransition
    }
};

const mapDispatchToProps = dispatch => {
    return {
        pushURLAbout: ()=>{dispatch(push('/about'))},
        pushURLWork: ()=>{dispatch(push('/work'))},
        pushURLBlog: ()=>{dispatch(push('/blog'))},
        pageTransition: ()=>{dispatch(pageTransition())}
}};

export default connect(mapStateToProps,mapDispatchToProps)(MenuBtn);