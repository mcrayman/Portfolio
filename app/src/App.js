import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Intro from './Intro.js'
import Navigation from './Navigation.js';
import Experience from './Experience.js';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Intro />
      <Experience />
    </div>
  );
}

export default App;
