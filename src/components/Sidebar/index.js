import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import logoS from '../../assets/images/logo-y.png';
import logoSubtitle from '../../assets/images/logo-sny.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome,faCode, faUser } from '@fortawesome/free-solid-svg-icons';
import { faAmazon, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
const Sidebar = () =>(
<>
    <div className ='nav-bar'>
        <Link className='logo' to ='/'>
            <img src ={logoS} alt ="logo"/>
            <img className ='sub-logo' src ={logoSubtitle} alt ="logo subtitle"/>

        </Link>
        <nav>
            <NavLink exact ="true " activeclassname="active" to ="/">
                <FontAwesomeIcon icon = {faHome} color ="#4D4D4e"/>

            </NavLink>
            <NavLink exact ="true " activeclassname="active" className = "about-link"to ="/about">
                <FontAwesomeIcon icon = {faUser} color ="#4D4D4e"/>

            </NavLink>
            <NavLink exact ="true " activeclassname="active" className = "project-link"to ="/projects">
                <FontAwesomeIcon icon = {faCode} color ="#4D4D4e"/>

            </NavLink>
            <NavLink exact ="true " activeclassname="active" className="contact-link"to ="/contact">
                <FontAwesomeIcon icon = {faEnvelope} color ="#4D4D4e"/>

            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/younes-ait-ouahda-72987b202" >
                    <FontAwesomeIcon icon={faLinkedin} color="#4D4D4E"/>

                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/younes-ait-ouahda-72987b202" >
                    <FontAwesomeIcon icon={faGithub} color="#4D4D4E"/>

                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/younes-ait-ouahda-72987b202" >
                    <FontAwesomeIcon icon={faUser} color="#4D4D4E"/>

                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/younes-ait-ouahda-72987b202" >
                    <FontAwesomeIcon icon={faAmazon} color="#4D4D4E"/>

                </a>
            </li>
        </ul>
    </div>
</>
)

export default Sidebar