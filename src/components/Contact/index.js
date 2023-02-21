
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { useRef } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faContactCard } from '@fortawesome/free-solid-svg-icons'



const Contact = ()=>{
   
    const [letterClass, setLetterClass] = useState('text-animate')
    const Text = useRef()
    const objet = useRef()



    useEffect(() => {
         setTimeout(() => {
        setLetterClass('text-animate-hover')
        }, 3000)
    }, [])
  const sendEmail=()=> {
    console.log("mailto:Younes.AitOuahda@gmail.com"+Text.current.value )
    window.location.href = "mailto:Younes.AitOuahda@gmail.com?subject="+objet.current.value+"&body="+Text.current.value;
}
   
    return (
        <>
        <div className="container contact-page">
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                idx={15}
              />
            </h1>
            <p>
              I am interested in freelance opportunities - especially on ambitious
              or large projects. However, if you have any other requests or
              questions, don't hesitate to contact me using below form either.
            </p>
            <div className="contact-form">
              <form  onSubmit={sendEmail}>
                <ul>
                  <li className="half">
                    <input placeholder="Name" type="text" name="name" required />
                  </li>
                  <li className="half">
                    <input
                      placeholder="Email"
                      type="email"
                      name="email"
                      required
                    />
                  </li>
                  <li>
                    <input
                    ref={objet}
                      placeholder="Subject"
                      type="text"
                      name="subject"
                      required
                    />
                  </li>
                  <li>
                    <textarea
                    ref={Text}
                      placeholder="Message"
                      name="message"
                      required
                    ></textarea>
                  </li>
                  <li>
                    <input type="submit" className="flat-button" value="SEND" />
                  </li>
                </ul>
              </form>
            </div>
          </div>
          
          <div className="logo-contact">
          <FontAwesomeIcon icon = {faContactCard} color ="#ffee2b"/>
            </div>
        </div>
        <Loader type="ball-pulse" />
      </>
    )
  }
  
export default Contact