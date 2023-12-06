import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Intro from './Intro.js'
import Navigation from './Navigation.js';
import Experience from './Experience.js';
import Projects from './Projects.js';
import Contact from './Contact.js'
import Technologies from './Technologies.js';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Intro />
      <Experience />
      <Technologies />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
