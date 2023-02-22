import { faEdge ,faFirefoxBrowser  } from '@fortawesome/free-brands-svg-icons'
import { faFileCode } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'
import { Link } from 'react-router-dom'
import './index.scss'

const Projects =()=>{
 
    return (
      <>
<div className='container'>
      <div className='exeplen yel'>
          <p className='text-zone '>
            <h3>
              1-Web App for POS "point of sale"
            </h3>
            it was an intership project made to run in POS's
          </p>
          <p>
            <h3>
              2-Web App for students Clubs 
            </h3>
            in this project i worked in the back-end using  
          </p>
      </div> 
<div class="computer">
<div class="monitor">
  <div class="screen" >
      <ul className='ul'>
        <li>
          <Link className='icon' to ='/Display?param1=p2.htm'>
            <FontAwesomeIcon className='img' icon={faEdge} color='#0023ff' />
          <span class="label">Project 1 </span>
          </Link>
        </li>
        <li>
        
        
        <Link className='icon' to ='/Display'>

            <FontAwesomeIcon className='img' icon={faFileCode} color='#331E54' />
          <span class="label">Project 2</span>
         </Link>        </li>
        <li>
        <Link className='icon' to ='/Display?param1=p22.htm'>
            <FontAwesomeIcon className='img' icon={faFirefoxBrowser} color='#FF9500' />
          <span class="label">Project 2-2</span>
         </Link>        
        </li>
        <li>
        <Link className='icon' to ='/Display?param1=p3.htm'>
            <FontAwesomeIcon className='img' icon={faFirefoxBrowser} color='#FF9500' />
          <span class="label">Project 1-1</span>
          </Link>         
          </li>
      </ul>
  </div>
  <div class="base">
    <div class="stand"></div>
    <div class="foot"></div>
  </div>
</div>

  <div class="keyboard">
  <div class="row">
    <a href='/' class="key letter">Q</a>
    <div class="key letter">W</div>
    <div class="key letter">E</div>
    <div class="key letter">R</div>
    <div class="key letter">T</div>
    <div class="key letter">Y</div>
    <div class="key letter">U</div>
    <div class="key letter">I</div>
    <div class="key letter">O</div>
    <div class="key letter">P</div>
  </div>
  <div class="row">
    <div class="key letter">A</div>
    <div class="key letter">S</div>
    <div class="key letter">D</div>
    <div class="key letter">F</div>
    <div class="key letter">G</div>
    <div class="key letter">H</div>
    <div class="key letter">J</div>
    <div class="key letter">K</div>
    <div class="key letter">L</div>
    <div class="key enter">Enter</div>
  </div>
  <div class="row">
    <div class="key shift">Shift</div>
    <div class="key letter">Z</div>
    <div class="key letter">X</div>
    <div class="key letter">C</div>
    <div class="key letter">V</div>
    <div class="key letter">B</div>
    <div class="key letter">N</div>
    <div class="key letter">M</div>
    <div class="key backspace">Backspace</div>
  </div>
  <div class="row">
    <div class="key space"></div>
  </div>
</div>

<div class="mouse">
  <div class="scroll-wheel"></div>
  <div class="left-button"></div>
  <div class="right-button"></div>
</div>
</div>     

</div>
<Loader type='ball-pulse'/>

</>

)
}

export default Projects

