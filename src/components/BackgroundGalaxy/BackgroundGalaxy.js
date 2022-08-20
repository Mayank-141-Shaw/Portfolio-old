import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { Color, WebGL1Renderer } from 'three'

import * as leatherNormal from '../../assets/images/leather.png'

export default function BackgroundGalaxy(props) {


    const mountRef = useRef(null)

    // geometry
    const sphereGeometry = new THREE.SphereGeometry(5, 50, 50);
   
    // material
    const material = new THREE.MeshBasicMaterial({
      color: 0xff0000,
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
    const renderer = new WebGL1Renderer()
    renderer.setSize(window.innerWidth, window.innerHeight)

    scene.add(sphereMesh, light)
    camera.position.z = 50;

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
