import React from 'react';
import TodoList from '../ToDoList/ToDoList';
import ToDoRequest from '../ToDoRequest/ToDoList';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { Inc } from '../useActions';

class Wrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 1,
            math: true,
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

export default connect(mapStateToProps)(Wrapper);
