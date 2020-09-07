//react
import React,{ useEffect } from 'react';

//component
import { afterMove, scrollGo } from '../../functions/function';
import { connect } from 'react-redux';
import { pageTransition } from '../../store/actionCreater';
import Canvas from '../parts/canvas_';

const About = (props)=>{

    useEffect(()=>{
        window.onbeforeunload = function () {
        window.scrollTo(0, 0);
        if(window.innerWidth > 420){
            scrollGo();
        }
    }

        const canvas = new Canvas();

        if(props.firstLoadState){
            afterMove();
        }
    },[]);

    return(
        <section id="about">
            <div className="fv_content_wrap" style={{width: innerWidth, height: innerHeight}}>
                <div className="fv_content_wrap_inner">
                <div className="about_textTitleWrap" id="aboutText">
                    <h2>About</h2>
                    <div className="title_border"></div>
                    <h3>I Can Do<br/><span>Frontend-Architect</span> Design.</h3>
                </div>
                <div id="aboutCanvas"></div>
                </div>
            </div>
            <div className="bt_content_wrap">
                <div className="bt_content_wrap_inner">

                    <div className="horizontal_border"></div>

                    <div className="profile_wrap">
                        <div className="l_content">
                            <dl className="name_wrap">
                                <dt>Hada Ryotaro</dt>
                                <dd>Web Developer</dd>
                            </dl>
                            <div className="title_border"></div>
                            <div className="skillSet_wrap">
                                <p>Skillset : JS, React, Redux, Node.js, Webpack</p>
                                <p>Web Experience : 2 years</p>
                            </div>
                        </div>
                        <div className="r_content">
                            <p>
                                JSフレームワーク、状態管理ライブラリ等を使用したフロントエンドアーキテクチャ構築に理解があります。制作においては常に最適解を考えながら技術を磨き、学習を絶やさないことを心がけています。
                            </p>
                        </div>
                    </div>

                    <div className="horizontal_border"></div>

                    <div className="experience_wrap">
                        <h3>Experience</h3>
                        <div className="title_border"></div>
                        <p>地元のIT企業でコーダー業務を1年間、Webデザイナーとして約1年（在籍中）の<span>計2年間Web業界</span>に努めていました。こうした業界にいる中で<span>アプリケーション開発</span>に魅力を感じ、jQueryを使用した制作がメインである社内に<span>React等に代表されるJSフレームワークを自身主導で現場に導入、開発の幅を広げるといった経験</span>をしました。</p>
                            
                        <p>開発の際には<span>Webpack</span>を使用、規模に応じてライブラリを使用した状態管理や非同期処理を行い、<span>概括的にフロントエンドアーキテクチャ構築</span>を行っています。</p>

                        <p>また、学習を始めてから日は浅いですが<span>WebGLやShaderによる3Dコンテンツ制作</span>も行っています。</p>
                            
                        <p>所属していた企業は主にWeb制作が多かったため、大規模なWebアプリケーション開発経験はありませんし、個人での制作はこのポートフォリオのみです。ですが常に最適解を考えながら技術を磨き、学習を絶やさないことを心がけることで様々な要件に対応できるようになりたいと考えています。</p>
                            
                        <p><span>Qiitaで技術メモ</span>を書いたりもしていますので良ければご覧ください。</p>

                        <button>
                            <a href="https://qiita.com/ryotarohada">
                                Qiitaの記事を見る
                            </a>
                        </button>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

const mapStateToProps = state => {
    return {
        device: state.initReducer.device,
        firstLoadState: state.initReducer.firstLoad,
        ws: state.interactionReducer.windowSize
    };
};

const mapDispatchToProps = dispatch => {
    return {
        pageTransition: ()=>{dispatch(pageTransition())}
}};

export default connect(mapStateToProps,mapDispatchToProps)(About);