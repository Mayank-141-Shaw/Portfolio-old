import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { Color, WebGL1Renderer } from 'three'

import earthMap from '../../assets/images/earth.jpg'


const vertexShader = `
  varying vec2 vertexUV;
  varying vec3 vertexNormal;

  void main(){
    vertexUV = uv;
    vertexNormal = normal;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

// change the intesity part between 0-1 for alpha value of rgb
// atmosphere power can be altered for better results
const fragmentShader = `
  uniform sampler2D globeTexture;
  varying vec2 vertexUV;
  varying vec3 vertexNormal;

  void main(){
    float intensity = 0.3 - dot(vertexNormal, vec3(0,0,0));
    vec3 atmosphere = vec3(0.3, 0.6, 1) * pow(intensity, 1.01);

    gl_FragColor = vec4( atmosphere + texture2D(globeTexture, vertexUV).xyz, 1.0);
  }
`;

const atmosVertexShader = `
  varying vec3 vertexNormal;

  void main(){
    vertexNormal = normal;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const atmosFragmentShader = `
  varying vec3 vertexNormal;

  void main(){
    float intensity = pow(0.5 - dot(vertexNormal, vec3(0,0,1.0)), 2.0);

    gl_FragColor = vec4(0.3, 0.7, 1.0, 1.0) * intensity;
  }
`;

export default function BackgroundGalaxy(props) {

    const mountRef = useRef(null)
    
    // earth mesh 
    const earthMesh = new THREE.Mesh(
      new THREE.SphereGeometry(5, 50, 50),
      new THREE.ShaderMaterial({
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
        uniforms:{
          globeTexture:{
            value: new THREE.TextureLoader().load(earthMap)
          }
        }
      })
    );
    

    const atmosphereMesh = new THREE.Mesh(
      new THREE.SphereGeometry(5, 50, 50),
      new THREE.ShaderMaterial({
        vertexShader: atmosVertexShader,
        fragmentShader: atmosFragmentShader,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide
      })
    )

    atmosphereMesh.scale.set(1.4, 1.4, 1.4);

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

    scene.add(earthMesh, atmosphereMesh)

    camera.position.z = 10;
    camera.position.y = 0;

    function animate(){
        requestAnimationFrame( animate )
        // earthMesh.rotation.x += 0.005
        earthMesh.rotation.y += 0.005

        renderer.render(scene, camera);
    }

    useEffect( () => {
        animate();
        return () => mountRef.current.appendChild( renderer.domElement );
       
    });

    

  return (
    <div style={{zIndex:'-1', position:"fixed"}} ref={mountRef}></div>
  )
}
