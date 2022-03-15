import logo from './logo.svg';
import { Link } from "react-router-dom";
import {INC, DEC, AINC} from "./actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import React from 'react';

class Logo extends React.Component {
    constructor(props) {
        super(props)
    }

    inc = () => {
        this.props.Inc();
    };
    dec = () => {
        this.props.Dec();
    };
    aInc = () => {
        this.props.aInc();
    };

    render() {
        return (
            <div>
                <p onClick={this.dec}>{this.props.count}</p>
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

function matchDispatchToProps(dispatch) {
    return bindActionCreators({Inc: INC, Dec: DEC, aInc: AINC}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Logo);
