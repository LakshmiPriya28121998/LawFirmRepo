import logo from './logo.svg';
import './App.css';
import { StyledEngineProvider } from '@mui/material';
import Navbar from "./components/Navbar.js"
import Hero from './components/Hero.js';
import Hero2 from './components/Hero2.js';
import Hero3 from './components/Hero3.js';
import Hero4 from './components/Hero4.js';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <StyledEngineProvider injectFirst>
      <Navbar />
      <Hero />
      <Hero2 />
      <Hero3 />
      <Hero4 />
      </StyledEngineProvider>
     
    </div>
  );
}

export default App;
