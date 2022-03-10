import logo from './logo.svg';
import { Link } from "react-router-dom";

function Logo() {
    return (
        <div>
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
            <Link className="App-link" to="todolist">
                <p>Go to list</p>
            </Link>
        </div>
    );
}

export default Logo;
