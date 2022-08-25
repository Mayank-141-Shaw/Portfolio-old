import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { Color, Float32BufferAttribute, WebGL1Renderer } from 'three'

import earthMap from '../../assets/images/earth.jpg'
import gsap from 'gsap'


const vertexShader = `
  varying vec2 vertexUV;
  varying vec3 vertexNormal;

  void main(){
    vertexUV = uv;
    vertexNormal = normalize(normalMatrix * normal);
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
    float intensity = 1.05 - dot(vertexNormal, vec3(0,0,1));
    vec3 atmosphere = vec3(0.3, 0.6, 1) * pow(intensity, 1.01);

    gl_FragColor = vec4( atmosphere + texture2D(globeTexture, vertexUV).xyz, 1.0);
  }
`;

const atmosVertexShader = `
  varying vec3 vertexNormal;

  void main(){
    vertexNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const atmosFragmentShader = `
  varying vec3 vertexNormal;

  void main(){
    float intensity = pow(0.65 - dot(vertexNormal, vec3(0,0,1.0)), 2.0);

    gl_FragColor = vec4(0.3, 0.7, 1.0, 1.0) * intensity;
  }
`;

export default function BackgroundGalaxy(props) {

    const mountRef = useRef(null)

    const docHeight = document.body.scrollHeight;
    const innerHeight = window.innerHeight;
    const scrollableLength = docHeight - innerHeight;
    const startGlobeRadius = window.innerWidth/100;

    const [radius, setRadius] = useState(startGlobeRadius)
    const [userPosY, setUserPosY] = useState(0)

    
  
  
    // for mouse movements
    const mouse = {
      x:undefined,
      y:undefined
    }

    const group = new THREE.Group()
    
    // earth mesh 
    const earthMesh = new THREE.Mesh(
      new THREE.SphereGeometry(radius, 150, 150),
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
      new THREE.SphereGeometry(radius, 50, 50),
      new THREE.ShaderMaterial({
        vertexShader: atmosVertexShader,
        fragmentShader: atmosFragmentShader,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide
      })
    )

    atmosphereMesh.scale.set(1.02, 1.02, 1.02);


    // making the stars
    const starsGeometry = new THREE.BufferGeometry()
    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.1
    })

    const starVertices = []
    for(let i=0; i<2000; i++){
      const x = (Math.random() - 0.5) * 200;
      const y = (Math.random() - 0.5) * 200;
      const z = -Math.random() * 1000;
      starVertices.push(x,y,z)
    }

    starsGeometry.setAttribute(
      'position', 
      new THREE.Float32BufferAttribute(starVertices, 3)
    );

    const stars = new THREE.Points(starsGeometry, starMaterial);



    // light
    const light = new THREE.DirectionalLight(0xffffff);
    
    // scene
    const scene = new THREE.Scene()
    scene.background = new Color( Number.parseInt(props.background , 16))

    // camera
    const camera = new THREE.PerspectiveCamera(15, window.innerWidth / window.innerHeight , 0.1, 100)

    // renderer

    /**
     * anti alias gets rid of the sharp edges and makes mesh smooth
     */
    const renderer = new WebGL1Renderer({
      antialias: true
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio)

    // adding earth to the group
    group.add(earthMesh)

    scene.add(group, atmosphereMesh, stars)

    camera.position.z = 2*radius-7;
    camera.position.y = 15;


    const handleScroll = () => {
      const position = window.pageYOffset;
      setUserPosY(position);

      var pageViewedRatio = position/scrollableLength;

      // update the radius between 13 - 5
      let radiusRange = startGlobeRadius-5;
      let currentRadiusChange = radiusRange*pageViewedRatio;

      // more the radius change , more we will deduct from radius
      let newRadius = startGlobeRadius - currentRadiusChange;
      setRadius( newRadius );


      camera.position.z = (2*radius - 7) * (1-pageViewedRatio);
      camera.position.y = 15 ;

      // update the camera pos z from 10 - 2*radius-7
      // update the camera pos y from 0 - 15
      console.log(`position: ${position + window.innerHeight}, document: ${docHeight}`)
    };

    function animate(){
        requestAnimationFrame( animate )
        // earthMesh.rotation.x += 0.005
        earthMesh.rotation.y += 0.001
        
        gsap.to(group.rotation, {
          x: -mouse.y * 0.3,
          y: mouse.x * 0.5,
          duration: 2
        })

        renderer.render(scene, camera);
    }

    useEffect( () => {
        animate();
        window.addEventListener('mousemove', (e) => {
          mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
          mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
        })
        window.addEventListener("scroll", handleScroll);

        return () => {
          mountRef.current.appendChild( renderer.domElement );
          
        };
    }, []);

    

  return (
    <div style={{zIndex:'-1', position:"fixed"}} ref={mountRef}></div>
  )
}
