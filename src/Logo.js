import { Link } from "react-router-dom";
import { connect } from "react-redux";
import React from 'react';
import {Inc} from "./useActions";

const initialState = {
    count: 0,
    number: 12
};

export function reducer(state = initialState, action) {

    switch (action.type) {
        case 'INCREMENT':
            return { count: action.isIncrement ? state.count + action.number : state.count - action.number };

        default: return state;
    }
}

class Logo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: '',
            math: true,
        }
    }

    mathFunc = (event) => {
        this.setState({number: event.target.value});
    };

    render() {
        const { number, math } = this.state;
        return (
            <>
                <div className="incDecPosition">
                    <p className='numberGet' onClick={() => Inc.call(this, Number(number), math)}>{this.props.count}</p>
                    <input name='numberWrite' type="text" value={number} onChange={this.mathFunc}/>
                    <div className="radioButtonWrapper">
                        <label>
                            <input id='incNumber' defaultChecked type="radio" name='math' value='true' onClick={() => {this.setState({math: true})}}/>
                            <p>+</p>
                        </label>
                        <label>
                            <input id='decNumber' type="radio" name='math' value='false' onClick={() => {this.setState({math: false})}}/>
                            <p>-</p>
                        </label>
                    </div>
                </div>
                <Link className="App-link" to="/todolist">
                    <p>Show list</p>
                </Link>
            </>
        );
    }
}

function mapStateToProps(state) {
    return {
        count: state.first.count
    }
}

export default connect(mapStateToProps)(Logo);
