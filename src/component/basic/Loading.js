import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { fadeOut_DelayTime, fadeOutTime } from '../../functions/function';
import SoundSelect from './soundSelect';

const Loading = (props)=>{

    useEffect(()=>{
        scrollTo(0,0)
        const loader = document.getElementById('loader');
        function no_scroll (e){ e.preventDefault() }
        loader.addEventListener('wheel', no_scroll, { passive: false })
    },[])

    return(
        <div id="loader" className={props.soundSelectState ? 'screenOut' : ''} style={{width: props.ws.w, height: props.ws.h, animationDelay: fadeOut_DelayTime + 'ms', animationDuration: fadeOutTime + 'ms'}}>
            <h1 className={props.firstLoadState ? 'loading-text-fadeOut' : ''}>RYOTARO HADA</h1>
            <SoundSelect />
        </div>
    );
};

const mapStateToProps = state => {
    return {
        firstLoadState: state.initReducer.firstLoad,
        soundSelectState: state.initReducer.soundSelect,
        ws: state.interactionReducer.windowSize
    };
};

const mapDispatchToProps = dispatch => {
    return {
}};

export default connect(mapStateToProps,mapDispatchToProps)(Loading);