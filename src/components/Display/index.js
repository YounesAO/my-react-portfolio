import { faCode } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect } from 'react'
import { useState } from 'react'
import Loader from 'react-loaders'
import AnimatesLetters from '../AnimatedLetters'
import Projects from '../Projects'
import './index.scss'
console.log(Projects)


const Display = ()=>{
    const [letterClass ,settLetterClass]=useState('text-animate');

const params = new URLSearchParams(window.location.search);
const param1 = params.get('param1');

useEffect(() => {
    setTimeout(() => 
      settLetterClass('text-animate-hover')
    , 4000)
  }, [])
    return(
        <>
        <div className='container '>
        <div className="text6-zone page-display">
            <h1>
              <AnimatesLetters
                letterClass={letterClass}
                strArray={['P', 'R', 'O', 'J', 'E', 'C', 'T', 'S']}
                idx={15}
              />
            </h1>
            </div>
        <iframe className='display-frame' src ={'/'+param1} width="100%" height="500"></iframe>
        <a className='btn-go-back' href='/projects'>
        <FontAwesomeIcon className='img' icon={faCode} color='#ffee00be' />

              <span>Go back to projects</span>
              </a>
        </div>
        <Loader type='ball-pulse'/>

        </>
    )

}
export default Display 