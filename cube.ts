import * as THREE from "three";



export function renderCube(){

    let camera: THREE.PerspectiveCamera, scene: THREE.Scene, renderer: THREE.WebGLRenderer;
    let points: THREE.Object3D<THREE.Event> | THREE.Points<THREE.BufferGeometry, THREE.PointsMaterial>;


    function init() {


        //

        camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 1, 3000 );
        camera.position.x = 0
        camera.position.y = 0
        camera.position.z = 16
    

        scene = new THREE.Scene();

        //


        const geometry = new THREE.BufferGeometry();

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

        //geometry.computeBoundingSphere();

        //

        const material = new THREE.PointsMaterial( { size: 0.005} );

        points = new THREE.Points( geometry, material );
        points.position.x = -6
        scene.add( points );

        //

        renderer = new THREE.WebGLRenderer();
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement );

        //

        window.addEventListener( 'resize', onWindowResize );

    }


    function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

    }

    //

    function animate() {

        requestAnimationFrame( animate );

        render();

    }

    function render() {

        const time = Date.now() * 0.001;

        points.rotation.x = time * 0.25;
        points.rotation.y = time * 0.5;

        renderer.render( scene, camera );

    }

    init();
    animate();

}