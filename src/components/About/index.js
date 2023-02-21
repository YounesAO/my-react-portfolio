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
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
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
            strArray={['A','B','O','U','T']}
           idx={15}
           />
            </h1>
            <p>
                Formation
                Diplôme universitaire de technologie DUT en Génie  Informatique en cours
                Ecole Supérieure de Technologies EST, Dakhla.
                Pertinents cours : Programmation orientée objet, Base de données, Architecture des ordinateurs, Réseaux informatiques

            </p>
 
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon  icon={faPhp} color="#8993be" />
            </div>
            <div className="face2">
              <FontAwesomeIcon  icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
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