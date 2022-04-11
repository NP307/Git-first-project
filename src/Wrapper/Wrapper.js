import React from 'react';
import ToDoRequest from '../ToDoList/ToDoList';
import { Link } from "react-router-dom";

class Wrapper extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Link className="App-link" to="/">
                    <p>Hide list</p>
                </Link>
                <ToDoRequest />
            </div>
        )
    }
}

export default Wrapper;
