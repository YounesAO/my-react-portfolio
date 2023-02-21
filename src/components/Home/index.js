import './index.scss';
import logoTitle from'../../assets/images/logo-yo.png'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AnimatesLetters from '../AnimatedLetters';
import Logo from './Logo';
import Loader from 'react-loaders';
const Home = () => {
    
    const [letterClass ,settLetterClass]=useState('text-animate');
    const nameArray = ['O','U','N','E','S'];
    const jobArray = ['F','U','L','L',' ','S','T','A','C','K',' ','D','E','V'];
    
    useEffect(() => {
        setTimeout(() => 
          settLetterClass('text-animate-hover')
        , 4000)
      }, [])
    
   return (
    <>
    <div className='container home-page'>
        <div className='text-zone'>

            <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>

                <br/> 
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
            <img src ={logoTitle} alt="devolopper"/>
            <AnimatesLetters letterClass={letterClass}
            strArray = {nameArray}
            idx={15}/>
            <br/>
            <AnimatesLetters letterClass={letterClass}
            strArray = {jobArray}
            idx={20}/>
            </h1>
            <h2> Frontend Devlopper /JAVA/SQL/SELEF-Polisher</h2>
            <Link to="/contact" className='flat-button'>Contact me</Link>
        </div>
        <Logo/>
    </div>
    <Loader type='ball-pulse'/>
    </>
   );
}
export default Home 