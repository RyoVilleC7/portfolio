import React from 'react';
import { connect } from 'react-redux';

var documentHeight = document.body.scrollHeight;  //ドキュメントの高さ取得
var documentHeight_ = window.innerHeight;  //表示中のスクリーンの高さ取得

document.addEventListener('scroll',function(){
    var scrollY = document.documentElement.scrollTop;
    var scrollPer = Math.floor(scrollY / ((documentHeight-documentHeight_) / 100 ));
    var scrollBar = document.getElementById('scrollBar');
    scrollBar.style.height = Math.abs(scrollPer) + 'px';
});

const ScrollBar = (props)=>{
    return(
        <div className={"scrollBar_wrap" + " " + (props.path === '/about' ? 'elemIn_right' : 'elemOut_right')}>
            <div id="scrollBar"></div>
            <div id="scrollBar_placeholder"></div>
        </div>
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

export default connect(mapStateToProps,mapDispatchToProps)(ScrollBar);