import React, { useEffect } from 'react';

//component
import Orientation from './parts/orientation';
import Loading from './basic/Loading';
import Mouse from './parts/Mouse';
import Header from './basic/Header';
import Content from './basic/Content';
import Canvas from './parts/Canvas';
import { init } from '../functions/three';

//redux
import { connect } from 'react-redux';

const App = (props)=>{

    useEffect(()=>{
        init();
    },[])

    return(
        <>
        <div className="noise-layer"></div>
        <Orientation />
        <Loading />
        <Mouse />
        <Header />
        <Content />
        <Canvas />
        </>
    )
}

const mapDispatchToProps = dispatch => ({
    initLoad: ()=>{dispatch(initLoad())}
})

export default connect(mapDispatchToProps)(App);