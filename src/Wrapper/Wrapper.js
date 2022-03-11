import React from 'react';
import TodoList from '../ToDoList/ToDoList';
import ToDoRequest from '../ToDoRequest/ToDoList'
import { Link } from "react-router-dom";

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
                <Link className="App-link" to="/">
                    <p>Go to Homepage</p>
                </Link>
                <TodoList ToDoArray={this.state.ToDoArray} handleClick={this.handleClick} />
                <ToDoRequest />
            </div>
        )
    }
}

export default Wrapper;
