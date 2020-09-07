import React from 'react';
import { connect } from 'react-redux';

import { mouseEnter, mouseLeave } from '../../store/actionCreater';

const Mouse = (props)=>{

    const mouseIn = ()=>{
        props.mouseEnter();
        document.removeEventListener('mouseenter',mouseIn);
        document.addEventListener('mouseleave', mouseOut);
        mouse.classList.remove('ms_window_out');
        mouse.classList.add('ms_window_in');
    }

    const mouseOut = ()=>{
        props.mouseLeave();
        document.removeEventListener('mouseleave',mouseOut);
        document.addEventListener('mouseenter', mouseIn);
        const mouse = document.getElementById('mouse');
        mouse.classList.remove('ms_window_in');
        mouse.classList.add('ms_window_out');
    }

    const mouseClassIn = ()=>{
        mouse.classList.remove('ms_animation_out');
        mouse.classList.add('ms_animation_in');
    }

    const mouseClassRemove = ()=>{
        mouse.classList.remove('ms_animation_in');
        mouse.classList.add('ms_animation_out');
    }

    document.addEventListener('mouseenter', mouseIn);
    document.addEventListener('mouseleave', mouseOut);

    const getMouseDirection = (e)=>{
        const mouse = document.getElementById('mouse');
        mouse.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
        e.target.classList.contains('hov') ? mouseClassIn() : mouseClassRemove();
    }

    document.addEventListener('mousemove', getMouseDirection, {passive: true});

    return(
        <div className="js-mouse-wrap">
            <div id="mouse"></div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        mouseEnterState: state.mouseReducer.mouseEnter,
        mouseLeaveState: state.mouseReducer.mouseLeave,
        mouseHover: state.mouseReducer.mouseHover
    };
};

const mapDispatchToProps = dispatch => {
    return {
        mouseEnter: ()=>{dispatch(mouseEnter())},
        mouseLeave: ()=>{dispatch(mouseLeave())}
}};

export default connect(mapStateToProps,mapDispatchToProps)(Mouse);