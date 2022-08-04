import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import ComponentAbc from "./ComponentAbc";
import './Validation'



function App() {
    const [count, setCount] = useState(1)
    const increment = () => {
        setCount(prevCount =>  prevCount + 1)
        setCount(prevCount =>  prevCount + 1)
    }

    return (
    <div className="App">
      <header className="App-header">
          <ComponentAbc></ComponentAbc>
        <img src={logo} className="App-logo" alt="logo" />
          <div>
              <button type={"button"} onClick={increment}>+</button>
              <span>
		      {count}
	    </span>
          </div>
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

      </header>
    </div>
  );
}

export default App;
