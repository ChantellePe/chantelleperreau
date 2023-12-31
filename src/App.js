import { useState } from 'react';
import gomoku from './utils/Gomoku.png'
import img from './utils/bgImg.png'
import calc from './utils/uniGradeCalc.png'
import fe from './utils/FrontEnd.png'
import be from './utils/Back.png'
import fs from './utils/FullStack.png'
import c from './utils/BigC.png'
import aj from './utils/meandaj.png'
import proj from './utils/Proj.png'
import me from './utils/AboutMe.png'

import './App.css';
import 'animate.css';

function App() {

  const [isButton1Hovered, setIsButton1Hovered] = useState(false);
  const [isButton2Hovered, setIsButton2Hovered] = useState(false);

  const handleButton1MouseEnter = () => {
    setIsButton1Hovered(true);
  };

  const handleButton1MouseLeave = () => {
    setIsButton1Hovered(false);
  };

  const handleButton2MouseEnter = () => {
    setIsButton2Hovered(true);
  };

  const handleButton2MouseLeave = () => {
    setIsButton2Hovered(false);
  };

  const button1Class = isButton1Hovered ? 'webDescBody animate__animated animate__fadeIn' : 'hidden';

  const button2Class = isButton2Hovered ? 'webDescBody animate__animated animate__fadeIn' : 'hidden';


  return (
    <div className="App">

      <section className="header">
        <div className="imgCont"></div>

      </section>

      <section>
        <h1 className="mainTitle">hantelle Perreau</h1>
        <img src={c} className="c" alt="C"></img>
        <img src={img} className='bgImg' alt="Chantelle Perreau"></img>

        <img src={fs} className='subHeadImg' alt="Full Stack Web Developer"></img>
        <button className="check">
          <a href="#myWork">View My Work</a>
        </button>
      </section>

      <section id="body">
        
        <div className='welcome'>
        
          <p className='intro'>Welcome to my site.<br></br></p>
          <p className='about'>I am a Sydney-based Web Developer with a passion for creating captivating and interactive interfaces that engage and inspire.</p>
          
          <p>My skills includes:</p>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={fe} className="feImg" alt="Front End"></img>
            </div>
            <div className="flip-card-back">
              <ul className="skills">
                <li>React</li>
                <li>Javascript</li>
                <li>Typescript</li>
                <li>JQuery</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flip-card2">
          <div className="flip-card-inner">
            <div className="flip-card-front2">
              <img src={be} className="feImg" alt="Back End"></img>
            </div>
            <div className="flip-card-back">
              <ul className="skills">
                <li>Java/Spring</li>
                <li>Node.js/Express.js</li>
                <li>PHP</li>
                <li>API Integrations/SQL</li>
              </ul>
            </div>
            
          </div>
          <img src={me} id= "me" className='projImg' alt="Chantelle Perreau"></img>
        </div>

        <p className='welcome intro edu'>I currently hold a Graduate Diploma of Information Technology from UNE, where I graduated with a GPA of 7.0 and an average grade of 94.5%</p>
        <p className='welcome intro edu'>Git: <a id="git" href="https://github.com/ChantellePe/">https://github.com/ChantellePe/</a></p>

        <div className='welcome'>
          
          <h3 className="about hidden" id="aboutMe">About Me<br></br></h3>
          
          <p className='intro hidden'>Currently living in Sydney's North Shore with my husband and daughter, I enjoy several hobbies including singing, playing piano and tutoring code to beginners. </p>
          <img src={aj} className='aj hidden' alt="Aj and me"></img>
          <p className='intro hidden'>Some of my past accomplishments include recording an EP, completing 4 university degrees </p>
        </div>


        <div id="content">
          <img src={proj} id='myWork' className='projImg' alt="Chantelle Perreau"></img>
          <h3 className="invisible">Projects</h3>
          <button className="portfolio" id="web1"
            onMouseEnter={handleButton1MouseEnter}
            onMouseLeave={handleButton1MouseLeave}>
            <a href='https://girly-gomoku.netlify.app/'>
              <img src={gomoku} className='projectBtn' alt="Gomoku"></img>

              <div className='exampleDescription'>
                <h4 className="webDescTitle">Girly Gomoku</h4>
                <p id="webTitle" className={button1Class}>Girly Gomoku is a web application built with React.js on the frontend, Express.js on the backend for server-side logic and a RESTful API, and MongoDB as the database. <br></br><br></br>
                  The app consists of a tongue-in-cheek design meant to satirize websites targeted towards women, hence the playful moniker 'Girly Gomoku'. <br></br><br></br>Users are able to register, play and retrieve completed games from the database, making for an enjoyable gaming experience. <br></br><br></br>The application is hosted using Heroku and Netlify (free tier).</p>
                <p className="mobDesc" >Girly Gomoku is a web application built with React.js on the frontend, Express.js on the backend for server-side logic and a RESTful API, and MongoDB as the database. <br></br><br></br>
                  The app consists of a tongue-in-cheek design meant to satirize websites targeted towards women, hence the playful moniker 'Girly Gomoku'. <br></br><br></br>Users are able to register, play and retrieve completed games from the database, making for an enjoyable gaming experience. <br></br><br></br>The application is hosted using Heroku and Netlify (free tier).</p>
              </div>
            </a>
          </button>
          <button className="portfolio" id="web2"
            onMouseEnter={handleButton2MouseEnter}
            onMouseLeave={handleButton2MouseLeave}>
            <a href='https://unigradecalc.netlify.app/'>
              <img src={calc} className='projectBtn' alt="Uni Grade Calc"></img>

              <div className='exampleDescription'>
                <h4 className="webDescTitle">University Grade Calculator</h4>
                <p id="webTitle2" className={button2Class}>The University Grade Calculator is a front end application written in vanilla Javascript (with some animations achieved using JQuery). It calculates your final grade based on your assessment results. <br></br><br></br>There are 8 seperate calculators as well as a customisable calculator that can take up to 10 assessments. <br></br><br></br>Users can use the 8 pre-built calculators to determine how I scored in that particular unit. <br></br><br></br>The application is hosted using Netlify (free tier).</p>
                <p className="mobDesc">The University Grade Calculator is a front end application written in vanilla Javascript (with some animations achieved using JQuery). It calculates your final grade based on your assessment results. <br></br><br></br>There are 8 seperate calculators as well as a customisable calculator that can take up to 10 assessments. <br></br><br></br>Users can use the 8 pre-built calculators to determine how I scored in that particular unit. <br></br><br></br>The application is hosted using Netlify (free tier).</p>
              </div>
            </a>
          </button>
        </div>

      </section>


      <footer>
        <p>&copy; {new Date().getFullYear()} Chantelle Perreau. All rights reserved.</p>
      </footer>
    </div>
  );
}


export default App;
