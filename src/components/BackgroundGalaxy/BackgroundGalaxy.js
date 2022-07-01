import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { Color, WebGL1Renderer } from 'three'

import * as leatherNormal from '../../assets/images/leather.png'

export default function BackgroundGalaxy(props) {


    const mountRef = useRef(null)

    // geometry
    const sphereGeometry = new THREE.SphereGeometry(15, 32, 32)
    //const sphereGeometry = new THREE.TorusGeometry(10, 3, 16, 100 )
    const planeGeometry = new THREE.PlaneGeometry(50, 50, 5, 5);

    // material
    //const color = `0x00${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}00`
    const color =  `0x00ff00`

    //const normalTexture = new THREE.TextureLoader().load(leatherNormal)

    const material = new THREE.MeshStandardMaterial({
        color: Number.parseInt(color, 16),
        roughness: 0.2,
        metalness: 0.6
    })
    // material.normalMap = normalTexture
    // material.normalScale.set(-10,-10)
    
    // mesh 
    const sphereMesh = new THREE.Mesh(sphereGeometry, material)
    const planeMesh = new THREE.Mesh(planeGeometry, material)
    
    planeMesh.rotateX(-Math.PI/180 * 60)


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

    scene.add(sphereMesh, planeMesh, light)
    camera.position.z = 50;

    function animateSphere(){
        requestAnimationFrame( animateSphere )
        sphereMesh.rotation.x += 0.005
        sphereMesh.rotation.y += 0.005

        planeMesh.rotation.x += 0.01
        planeMesh.rotation.y += 0.01

        renderer.render(scene, camera);
    }

    useEffect( () => {

        animateSphere();

        return () => mountRef.current.appendChild( renderer.domElement );
       
    })

    

  return (
    <div style={{zIndex:'-1', position:"fixed"}} ref={mountRef}></div>
  )
}
