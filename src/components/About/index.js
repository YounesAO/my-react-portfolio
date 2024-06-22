import './index.scss';
import { useEffect, useState } from 'react'
import {
  faPhp,
  faCss3,
  faBootstrap,
  faHtml5,
  faJava,
  faReact,
  
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import { faDatabase} from '@fortawesome/free-solid-svg-icons'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import CV from '../CV';
const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(()=>{
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);
    },[]);
return (
<>
    <div className='container about-page'>
        <div className='text-zone'>
            <h1>
            <AnimatedLetters
            letterClass={letterClass}
            strArray={['A','B','O','U','T',' ','M','E']}
            idx={15}
            />
            </h1>
            <p>
            Software engineering student at ENSA-J,</p><p>
            Ex-Student 
                  in Computer Science Diploma of University Technology (DUT) at the Higher School of Technologies (EST) in Dakhla </p><p>, a relevant training program for acquiring skills in the field of computer science. The courses such as object-oriented programming, databases, computer architecture, and computer networks are essential skills to work in the field of computer science.

            </p>
 
        </div>
       <CV/>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon  icon={faPhp} color="#8993be" />
            </div>
            <div className="face2">
              <FontAwesomeIcon  icon={faDatabase} className='rotateSvg' color="#D3D3D3" />
            </div>
            <div className="face3">
            <FontAwesomeIcon  icon={faHtml5} color="#F06529" />

              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJava} color="#f89820 " />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faBootstrap} color="#563d7c " />
            </div>
          </div>
        </div>
      </div>
      <Loader type="ball-pulse" />
    </>
  )
}

export default About