import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects/index';
import Display from './components/Display';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    var _mtm = window._mtm = window._mtm || [];
    _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.async=true; g.src='https://cdn.matomo.cloud/younesaitouahdavercelapp.matomo.cloud/container_F1E1bSE1.js'; s.parentNode.insertBefore(g,s);
   }, [])
  return (
    <>
    <SpeedInsights/>
    <Routes>
      <Route path='/' element ={<Layout/>}>
    
        <Route index element={<Home />}/>
        <Route path='about' element ={<About/>}/>
        <Route path='projects' element ={<Projects/>}/>

        <Route path='contact' element ={<Contact/>}/>
      
      </Route>
      <Route path='Display' element ={<Display/>}>
        </Route>



    </Routes>
    </>
  );
}

export default App;
