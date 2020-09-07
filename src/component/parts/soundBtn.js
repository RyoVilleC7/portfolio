import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import { soundSwitch } from '../../store/actionCreater';
import { music } from '../../functions/function';

music.addEventListener("ended", function () {
    music.currentTime = 0;
    music.play();
  }, false);

const SoundBtn = (props)=>{

    const play = ()=>{
        if(props.soundSwitchState === true){
            music.pause();
        }else if(props.soundSwitchState === false){
            music.play();
        }
        props.soundSwitch();
      }

    return(
        <div className={"sound-btn" + " " + "hov" + (props.soundSwitchState ? ' sound-btn-on' : ' sound-btn-off')} onClick={play}>
            <span>{props.soundSwitchState ? 'sound on' : 'sound off'}</span>
            <div className={"sound-state-logo" + (props.soundSwitchState ? ' sound-animation-on' : ' sound-animation-off')}></div>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        soundSwitchState: state.interactionReducer.soundSwitch
    }
};

const mapDispatchToProps = dispatch => {
    return {
        soundSwitch: ()=>{dispatch(soundSwitch())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SoundBtn);