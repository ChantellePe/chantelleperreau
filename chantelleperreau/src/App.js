import img from './utils/CPBW.png'
import './App.css';

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
      <button className="check">Check out my work</button>
    </section>
    
    <section className="body">
      <h2 className="aboutMe">Welcome to my website</h2>
    </section>
    
    <footer>
      <p>&copy; {new Date().getFullYear()} Chantelle Perreau. All rights reserved.</p>
    </footer>
  </div>
);
}


export default App;
