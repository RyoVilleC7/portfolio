import React, {useEffect} from 'react';
import { connect } from 'react-redux';

const Orientation = (props)=>{

    useEffect(()=>{
        scrollTo(0,0)
        const loader = document.getElementById('orientationLayer');
        function no_scroll (e){ e.preventDefault() }
        loader.addEventListener('wheel', no_scroll, { passive: false })
    },[])

    return(
        <div id="orientationLayer" className={props.orientation ? 'is_hidden' : 'is_show'}>
            <div className="orientationLayer_inner" style={{width: props.ws.w, height: props.ws.h}}>
                <div className="attention_box">
                    <p>デバイスを<span>縦向き</span>に持ちかえてください</p>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        orientation: state.initReducer.orientation,
        firstLoadState: state.initReducer.firstLoad,
        ws: state.interactionReducer.windowSize
    };
};

const mapDispatchToProps = dispatch => {
    return {
}};

export default connect(mapStateToProps,mapDispatchToProps)(Orientation);