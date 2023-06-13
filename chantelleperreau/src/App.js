import img from './utils/CPBW.png'
import './App.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">

    <section className="header">
      <div className="imgCont"></div>
      <img src={img} className='bgImg' alt="Chantelle Perreau"></img>
    </section>
    
    <section>
      <h1 className="mainTitle">Chantelle Perreau</h1>
      <h2 className="subheading">Full Stack Web Developer</h2>
      <button className="check">
      <a href="#myWork">View My Work</a>
      </button>
    </section>
    
    <section className="body">
      <h2 className="aboutMe">Welcome to my website</h2>
    </section>

    <section id="myWork">
      <h2 className="aboutMe">WHey Hey </h2>
    </section>
    
    <footer>
      <p>&copy; {new Date().getFullYear()} Chantelle Perreau. All rights reserved.</p>
    </footer>
  </div>
);
}


export default App;
