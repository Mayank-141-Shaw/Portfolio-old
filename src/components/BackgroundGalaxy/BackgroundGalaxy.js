import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { Color, WebGL1Renderer } from 'three'

import earthMap from '../../assets/images/earth.jpg'


const vertexShader = `
  varying vec2 vertexUV;

  void main(){
    vertexUV = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform sampler2D globeTexture;
  varying vec2 vertexUV;

  void main(){
    gl_FragColor = texture2D(globeTexture, vertexUV);
  }
`


export default function BackgroundGalaxy(props) {

    const mountRef = useRef(null)

    // geometry
    const sphereGeometry = new THREE.SphereGeometry(5, 50, 50);
   
    // material
    const material = new THREE.ShaderMaterial({
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      uniforms:{
        globeTexture:{
          value: new THREE.TextureLoader().load(earthMap)
        }
      }
    });
    
    // mesh 
    const sphereMesh = new THREE.Mesh(sphereGeometry, material)

    // light
    const light = new THREE.DirectionalLight(0xffffff);
    
    // scene
    const scene = new THREE.Scene()
    scene.background = new Color( Number.parseInt(props.background , 16))

    // camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight , 0.1, 100)

    // renderer

    /**
     * anti alias gets rid of the sharp edges and makes mesh smooth
     */
    const renderer = new WebGL1Renderer({
      antialias: true
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio)

    scene.add(sphereMesh, light)
    camera.position.z = 10;
    camera.position.y = 0;

    function animate(){
        requestAnimationFrame( animate )
        sphereMesh.rotation.x += 0.005
        sphereMesh.rotation.y += 0.005

        renderer.render(scene, camera);
    }

    useEffect( () => {
        animate();
        return () => mountRef.current.appendChild( renderer.domElement );
       
    })

    

  return (
    <div style={{zIndex:'-1', position:"fixed"}} ref={mountRef}></div>
  )
}
