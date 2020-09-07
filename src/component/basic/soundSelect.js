import React from 'react';
import { connect } from 'react-redux';
import { soundSwitch, soundSelect, screenOut } from '../../store/actionCreater';
import { screen_totalAnimationTime, getTitle, music } from '../../functions/function';

const SoundSelect = (props)=>{

    const soundOn = ()=>{
        props.soundSwitch();
        props.soundSelect();
        music.play();

        setTimeout(()=>{
            props.screenOut();
            if(props.path === '/'){
                getTitle();
            };
        }, screen_totalAnimationTime)
    }

    const soundOff = ()=>{
        props.soundSelect();

        setTimeout(()=>{
            props.screenOut();
            getTitle();
        }, screen_totalAnimationTime)
    }

    return(
        <div className={"soundSelect" + ' ' + (props.firstLoadState ? 'ss_in' : 'ss_out')}>
            <p>このウェブサイトは<span>BGM</span>が流れます。<br/>再生してもよろしいですか？</p>
            <div className="sound_selectBtn_wrap">
                <button onClick={soundOn}>OK</button>
                <button onClick={soundOff}>ミュート</button>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        firstLoadState: state.initReducer.firstLoad,
        path: state.router.location.pathname,
        soundSwitchState: state.interactionReducer.soundSwitch
    };
};

const mapDispatchToProps = dispatch => {
    return {
        soundSwitch: ()=>{dispatch(soundSwitch())},
        soundSelect: ()=>{dispatch(soundSelect())},
        screenOut: ()=>{dispatch(screenOut())}
}};

export default connect(mapStateToProps,mapDispatchToProps)(SoundSelect);