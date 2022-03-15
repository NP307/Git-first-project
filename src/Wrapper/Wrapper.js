import React from 'react';
import TodoList from '../ToDoList/ToDoList';
import ToDoRequest from '../ToDoRequest/ToDoList'
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import {INC, DEC, AINC} from '../actions';
import {bindActionCreators} from 'redux';

class Wrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ToDoArray: [
                {
                    number: 11111,
                    isChecked: false
                },
                {
                    number: 22222,
                    isChecked: false
                },
                {
                    number: 33333,
                    isChecked: false
                },
                {
                    number: 44444,
                    isChecked: false
                },
                {
                    number: 55555,
                    isChecked: false
                },
            ]
        }
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

    handleClick = (index) => {
        this.setState((state) => {
            const array = state.ToDoArray;
            array[index] = {
                ...array[index],
                isChecked: !array[index].isChecked
            };
            return {
                ToDoArray: [...array]
            }
        });
    };

    render() {
        return (
            <div>
                <p onClick={this.inc}>{this.props.count}</p>
                <Link className="App-link" to="/">
                    <p>Go to Homepage</p>
                </Link>
                <TodoList ToDoArray={this.state.ToDoArray} handleClick={this.handleClick} />
                <ToDoRequest />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        count: state.count,
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({Inc: INC, Dec: DEC, aInc: AINC}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Wrapper);
