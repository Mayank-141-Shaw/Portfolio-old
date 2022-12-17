import React, { useEffect, useRef } from 'react'
import "./TextSphere.css"

import TagCloud from 'TagCloud'

import { SkillData } from '../SkillContainer/SkillData.js'

function TextSphere() {

    const ref = useRef(null)

    useEffect( () => {
        return () => {

            const container = ".tagcloud";
            const texts =  [...Object.values(SkillData).flat().map( skill => skill.title )]
            const options = {
                radius: (ref.current.parentElement.offsetWidth - 100)/2,
                depth: 1000,
                maxSpeed: "normal",
                initSpeed: "normal",
                keep: true,
            };

            TagCloud(container, texts, options)
        };
    }, [])

  return (
    <>
        <div ref={ref} className='text-sphere'>
            <span className='tagcloud'></span>
        </div>
    </>
  );
}

export default TextSphere