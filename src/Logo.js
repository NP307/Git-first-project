import logo from './logo.svg';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import React from 'react';
import {Inc} from "./useActions";

class Logo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 1,
            math: true,
        }
    }

    mathFunc = (event) => {
        this.setState({number: event.target.value});
    };

    render() {
        const { number, math } = this.state;
        return (
            <div>
                <p onClick={() => Inc.call(this, Number(number), math)}>{this.props.count}</p>
                <input name='number' type="text" value={number} onChange={this.mathFunc}/>
                <div>
                    <input defaultChecked type="radio" name='math' value='true' onClick={() => {this.setState({math: true})}}/>
                    <input type="radio" name='math' value='false' onClick={() => {this.setState({math: false})}}/>
                </div>
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
}

function mapStateToProps(state) {
    return {
        count: state.count
    }
}

export default connect(mapStateToProps)(Logo);
