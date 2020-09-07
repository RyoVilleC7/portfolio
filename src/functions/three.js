const THREE = require('three');
import store from '../store/store';

var scene,camera,renderer;

function resetCameraPos (){

    if(window.innerWidth >= 769){
        camera.position.x = -30
        camera.position.y = 40
        camera.position.z = 30
    }else if(window.innerWidth <= 768){
        camera.position.x = -40
        camera.position.y = 50
        camera.position.z = 40
    }
}


export function init(){

    let width = store.getState().interactionReducer.windowSize.w;
    let height = store.getState().interactionReducer.windowSize.h;

    //シーンの作成
    scene = new THREE.Scene();

    //カメラの作成
    camera = new THREE.PerspectiveCamera(
        90, width / height, 0.1, 1000
    );

    //レンダラーの作成
    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setClearColor( 0xffffff, 0);
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = true;

    var cubeGeometry = new THREE.BoxGeometry(40, 40, 40);
    var cubeMaterial = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        wireframe: false
    });
    
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

    cube.position.x = -4,
    cube.position.y = 3,
    cube.position.z = 0,
    cube.castShadow = true;

    resetCameraPos();
    camera.lookAt(cube.position);

    var spotLight = new THREE.SpotLight(0xB9D310);
    spotLight.position.set(100, 100, 100);
    spotLight.castShadow = true;

    document.getElementById('WebGL-output')
    .appendChild(renderer.domElement);
    renderScene();

    scene.add(cube, spotLight)

    renderer.render(scene, camera);

    function renderScene(){

        cube.rotation.x += 0.001;
        cube.rotation.y += 0.001;
        cube.rotation.z += 0.001;

        requestAnimationFrame(renderScene);
        renderer.render(scene, camera);
    };
};

function onResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    resetCameraPos();
}


window.addEventListener('resize', onResize, false);