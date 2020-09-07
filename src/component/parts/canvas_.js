import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer';
import { OrthographicCamera } from 'three/src/cameras/OrthographicCamera';
import { Scene } from 'three/src/scenes/Scene';
import { PlaneGeometry } from 'three/src/geometries/PlaneGeometry';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { ShaderMaterial } from 'three/src/materials/ShaderMaterial';
import { MeshBasicMaterial } from 'three/src/materials/MeshBasicMaterial';
import { Mesh } from 'three/src/objects/Mesh';
import { Vector2 } from 'three/src/math/Vector2';
const THREE = require('three');
import React from 'react';

import image from '../../assets/image/about_image.jpg';

// シェーダーソース
import vertexSource from '../../shader/rgbShifter.vert';
import fragmentSource from '../../shader/rgbShifter.frag';

const lerp = (x, y, p) => {
  return x + (y - x) * p;
}

export default class Canvas {
    constructor() {

      //触らんでいいところ
      this.w = 675;
      this.h = 450;
      this.renderer = new WebGLRenderer({ alpha: true });
      this.renderer.setSize(this.w, this.h);
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.renderer.setClearColor(0xffffff, 0)
      const container = document.getElementById("aboutCanvas");
      container.appendChild(this.renderer.domElement);
      this.camera = new OrthographicCamera(-1, 1, 1, -1, 0, -1);
      this.scene = new Scene();
      const geo = new PlaneGeometry(2, 2, 6, 6);
      this.mouse = new Vector2(0.5, 0.5);
      this.targetPercent = 0.0;
      this.move = 0.0
      this.last = window.pageYOffset
      const texture = new THREE.TextureLoader().load(image);
      ///////////////////////////////////////////////////////////////


  
      // uniform変数を定義
      this.uniforms = {
        uAspect: {
          value: this.w / this.h
        },
        uTime: {
          value: 0.0
        },
        uMouse: {
          value: new Vector2(0.5, 0.5)
        },
        uPercent: {
          value: this.targetPercent
        },
        uFixAspect: {
          value: this.h / this.w
        },
        uTex: {
          value: texture
        },
        uMov: {
            value: this.move
        },
        uShift: {
          value: 0
        }
      };
  
      // uniform変数とシェーダーソースを渡してマテリアルを作成
      const mat = new ShaderMaterial({
        uniforms: this.uniforms,
        vertexShader: vertexSource,
        fragmentShader: fragmentSource,
      });
  
      //メッシュ生成、シーンに追加
      this.mesh = new Mesh(geo, mat);
      this.scene.add(this.mesh);
  
       // 描画ループ開始
      this.render();
    }
    render() {
      // 次のフレームを要求
      requestAnimationFrame(() => { this.render(); });
  
      // ミリ秒から秒に変換
      const sec = performance.now() / 1000;
  
      // シェーダーに渡す時間を更新
      this.uniforms.uTime.value = sec;
  
      // シェーダーに渡すマウスを更新
      this.uniforms.uMouse.value.lerp(this.mouse, 0.02);
  
      // シェーダーに渡す進捗度を更新
      this.uniforms.uPercent.value += (this.targetPercent - this.uniforms.uPercent.value) * 0.1;

      this.uniforms.uShift.value = lerp(this.uniforms.uShift.value, (window.pageYOffset - this.last) / 50, 0.1);
      this.last = window.pageYOffset;

      this.renderer.render(this.scene, this.camera);
      
    }

    mouseWheel (e){
      let scrollAmount = Math.abs(e / 30).toFixed(1);
      if(scrollAmount > 2){
        scrollAmount = 2;
      }
      this.targetPercent = scrollAmount;/*

      let scrollAmount2 = lerp(0,2,(e / 100));
      console.log(scrollAmount2)
      if(scrollAmount2 < -0.5){
        scrollAmount2 = -0.5
    }else if(scrollAmount2 > 0.5){
          scrollAmount2 = 0.5
      }
      this.move = scrollAmount2;*/
    }

    set shift(value) {
      this.uniforms.shift.value = value
    }
  
    get shift() {
      return this.uniforms.shift.value
    }
  };