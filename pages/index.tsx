import type { NextPage } from 'next'
import * as THREE from "three";
import  {useEffect } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'



const Home: NextPage = () => {
  useEffect(() => {
    //Set up canvas
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    const controls = new OrbitControls(camera, renderer.domElement)


    //set up objects
    const geometry = new THREE.BufferGeometry()

    
    const sideLength = 10
    const posArray = new Float32Array((sideLength * sideLength * sideLength) * 3)
    let i = 0
    for ( let x = 0; x < sideLength; x += 1 ) {
      for ( let y = 0; y < sideLength; y += 1){
        for (let z = 0; z < sideLength; z += 1){
          posArray[i] = x
          posArray[i+1] = y 
          posArray[i+2] = z
          i += 3
        }
      }
    }
    console.log(posArray)
    geometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))


    var material = new THREE.PointsMaterial({size: 0.005})
    var cube = new THREE.Points( geometry, material );
    const gridHelper = new THREE.GridHelper(200, 50)
    scene.add( cube, gridHelper );
    camera.position.x = 0
    camera.position.y = 0
    camera.position.z = 30
    
    //animate
    var animate = function () {
      requestAnimationFrame( animate );
      
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      cube.rotation.z += 0.01;
     controls.update()
      renderer.render( scene, camera );
    };
    animate();
    
  });
  return (
    <></>
  )
}

export default Home
 