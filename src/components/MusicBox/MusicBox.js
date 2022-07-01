import React, { useEffect, useState } from 'react'
import './MusicBox.css'
import { MdMusicNote, MdMusicOff } from 'react-icons/md'
import music from '../../assets/sounds/Leviathans-Dream-Sequence.mp3'


const useAudio = url => {

  let mm = new Audio(url);
  mm.loop = true

  const [audio] = useState(mm);
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};



function MusicBox() {

    const [playing, toggle] = useAudio(music);

    // const [isPlaying, setPlaying] = useState(true)
    
    // let mm = new Audio(music)
    // mm.loop = true
    // const [audio, setAudio] = useState(mm);  

    // const toggleMusic = () => {
    //     setPlaying(!isPlaying);
    //     isPlaying ? audio.pause() : audio.play();
    // }

    // useEffect(() => {
    //   if(isPlaying) {
    //     document.getElementById('audio-play').play();
    //   }
    // }, [])

  return (
    <div className='music-box' onClick={toggle}>
        {playing ? <span className='msg'><MdMusicNote size={20}/>ON</span> : <span className='msg'><MdMusicOff size={20} />OFF</span>}
        <div className="loader" style={playing ? {height:'20px'} : {height:'5px'}}>
            <span className={`stroke ${playing ? 'play':'dont-play'} `}></span>
            <span className={`stroke ${playing ? 'play':'dont-play'} `}></span>
            <span className={`stroke ${playing ? 'play':'dont-play'} `}></span>
            <span className={`stroke ${playing ? 'play':'dont-play'} `}></span>
            <span className={`stroke ${playing ? 'play':'dont-play'} `}></span>
            <span className={`stroke ${playing ? 'play':'dont-play'} `}></span>
            <span className={`stroke ${playing ? 'play':'dont-play'} `}></span>
        </div>
    </div>
  )
}

export default MusicBox