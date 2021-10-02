import type { NextPage } from 'next'
import  {useEffect } from 'react';
import { Box, Heading } from "@chakra-ui/react"
import { Button, ButtonGroup } from "@chakra-ui/react"
import { Link } from "@chakra-ui/react"

import * as THREE from "three";
//import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import { GoMarkGithub } from "react-icons/go";
import { FaLinkedin, FaMedium } from "react-icons/fa";


const Home: NextPage = () => {
  useEffect(() => {
    //Set up canvas
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    //const controls = new OrbitControls(camera, renderer.domElement)


    //set up objects
    const geometry = new THREE.BufferGeometry()

    
    const sideLength = 12
    const posArray = new Float32Array((sideLength * sideLength * sideLength) * 3)
    let i = 0
    for ( let x = 0; x < sideLength; x += 1 ) {
      for ( let y = 0; y < sideLength; y += 1){
        for (let z = 0; z < sideLength; z += 1){
          posArray[i] = x - (sideLength/2)
          posArray[i+1] = y - (sideLength/2)
          posArray[i+2] = z - (sideLength/2)
          i += 3
        }
      }
    }
    geometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))


    var material = new THREE.PointsMaterial({size: 0.005})
    var cube = new THREE.Points( geometry, material );
    scene.add( cube );
    camera.position.x = 0
    camera.position.y = 0
    camera.position.z = 16

    cube.position.x = -6
    
    //animate
    var animate = function () {
      requestAnimationFrame( animate );
      
      cube.rotation.x += 0.005;
      cube.rotation.y += 0.005;
      //controls.update()
      renderer.render( scene, camera );
    };
    animate();
    
  });


  return (
    <Box position="absolute" width="100%" top={80}>
      <Box display="grid" justifyItems="end" padding={[2, 2, 20]}>
        <Box display="grid" justifyItems="center">
          <Heading color='white' >Welcome to my website.</Heading>
          <ButtonGroup variant="outline" spacing="3" paddingTop={3}>
            <Link href={'https://github.com/compile10'} isExternal>
              <Button colorScheme="white" leftIcon={<GoMarkGithub />} >
                Github
              </Button>
            </Link>
            <Link href={'https://www.linkedin.com/in/efrain800/'} isExternal>
              <Button colorScheme="white" leftIcon={<FaLinkedin />} >
                LinkedIn
              </Button>
            </Link>
            <Link href={'https://efrain800.medium.com/'} isExternal>
              <Button colorScheme="white" leftIcon={<FaMedium />} >
                Medium
              </Button>
            </Link>
          </ButtonGroup>
        </Box>

      </Box>
    </Box>
  )
}

export default Home
 