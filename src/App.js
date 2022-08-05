import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import ComponentAbc from "./ComponentAbc";
import './Validation';
import { Outlet, Link } from "react-router-dom";
import axios from "axios";
import './Api'



const baseURL = "https://jsonplaceholder.typicode.com/posts/1";


function App() {

    const [count, setCount] = useState(1)
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {


        axios.get(baseURL).then((response) => {
            setPost(response.data);
        });
    }, []);

    if (!post) return null;



    return (
    <div className="App">
      <header className="App-header">
          <nav
              style={{
                  borderBottom: "solid 1px",
                  paddingBottom: "1rem",
              }}
          >
              <Link to="/invoices">Invoices</Link> |{" "}
              <Link to="/expenses">Expenses</Link>
          </nav>
          <Outlet />
          <ComponentAbc></ComponentAbc>
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
          <div>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
          </div>

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
