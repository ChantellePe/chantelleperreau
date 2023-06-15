import { useState } from 'react';
import img from './utils/CPBW.png'
import gomoku from './utils/Gomoku.png'
import calc from './utils/uniGradeCalc.png'
import fe from './utils/FrontEnd.png'
import be from './utils/Back.png'
import './App.css';


function App() {
  //   const [isHovered, setIsHovered] = useState(false);
  
  //   const handleMouseEnter = () => {
  //     setIsHovered(true);
  //   };
  
  //   const handleMouseLeave = () => {
  //     setIsHovered(false);
  //   };
  
  // const itemClass = () =>{
  //   if (isHovered) {
  //     return 'exampleDescription'
  //   } else {
  //     return `exampleDescription hidden`
  //   }
  // }

  // const itemClass2 = () =>{
  //   if (isHovered) {
  //     return 'exampleDescription'
  //   } else {
  //     return `exampleDescription2 hidden`
  //   } 
  // }
  
  

  return (
    <div className="App">
      <img src={img} className='bgImg' alt="Chantelle Perreau"></img>
    <section className="header">
      <div className="imgCont"></div>
      
    </section>
    
    <section>
      <h1 className="mainTitle">Chantelle Perreau</h1>
      <h2 className="subheading">Full Stack Web Developer</h2>
      <button className="check">
      <a href="#myWork">View My Work</a>
      </button>
    </section>

    <section id="body">
      <div className='welcome'>
        <p className='intro'>Welcome to my site.<br></br></p>
        <p className='about'>I am a Sydney-based Web Developer with a passion for creating captivating and interactive <br></br>interfaces that engage and inspire.</p>
        <p>My skills includes:</p>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={fe} className="feImg"alt="Front End"></img>
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
          <img src={be} className="feImg"alt="Back End"></img>
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
        </div>

        <p className='welcome intro edu'>My education includes a Graduate Diploma of Information Technology from UNE, <br></br>where I graduated with a GPA of 7.0 and an average grade of 94.5%</p>

          
    <div id="content">
    <h2 id="myWork" className="projects">Examples</h2>
      <button className="portfolio" id="web1"
          // onMouseEnter={handleMouseEnter}
          // onMouseLeave={handleMouseLeave}
          >
        <img src={gomoku} className='projectBtn' alt="Gomoku"></img>
        <div className="exampleDescription">
          <h2 className="webDescBody">Girly Gomoku</h2>
          <p className="webDescBody">Girly Gomoku is a web application built with React.js on the frontend, Express.js on the backend for server-side logic and a RESTful API, and MongoDB as the database. <br></br><br></br>
            The app consists of a tongue-in-cheek design meant to satirize websites targeted towards women, hence the playful moniker 'Girly Gomoku'. <br></br><br></br>Users are able to register, play and retrieve completed games from the database, making for an enjoyable gaming experience. <br></br><br></br>The application is hosted using Heroku and Netlify (free tier).</p>
        </div>
      </button>
      <button className="portfolio" id="web2"
          // onMouseEnter={handleMouseEnter}
          // onMouseLeave={handleMouseLeave}
          >
        <img src={calc} className='projectBtn' alt="University Grade Calculator"></img>
        <div className="exampleDescription2">
          <h2 className="webDescBody2">Girly Gomoku</h2>
          <p className="webDescBody2">Girly Gomoku is a web application built with React.js on the frontend, Express.js on the backend for server-side logic and a RESTful API, and MongoDB as the database. <br></br><br></br>
            The app consists of a tongue-in-cheek design meant to satirize websites targeted towards women, hence the playful moniker 'Girly Gomoku'. <br></br><br></br>Users are able to register, play and retrieve completed games from the database, making for an enjoyable gaming experience. <br></br><br></br>The application is hosted using Heroku and Netlify (free tier).</p>
        </div>
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
