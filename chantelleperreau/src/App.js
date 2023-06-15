import img from './utils/CPBW.png'
import gomoku from './utils/Gomoku.png'
import calc from './utils/uniGradeCalc.png'
import fe from './utils/FrontEndOLd2.png'
import be from './utils/Back.png'
import './App.css';

function App() {
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
        <p className='about'>I am a Sydney-based Web Developer and System Analyst with with a passion for creating <br></br>captivating and interactive interfaces that engage and inspire.</p>
        <p>My skillset includes:</p>
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

    {/* <li className='nobullet'>Back End</li> */}
          
    {/* <p className='edu'>My education includes a Graduate Diploma of Information Technology from UNE, <br></br>where I graduated with a GPA of 7.0 and an average grade of 94.5%</p> */}
        
          
    <div id="content">
    <h2 id="myWork" className="projects">My Portfolio</h2>
      <button id="web1">
        <img src={gomoku} className='projectBtn' alt="Gomoku"></img>
      </button>
      <button id="web2">
        <img src={calc} className='projectBtn2' alt="University Grade Calculator"></img>
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
