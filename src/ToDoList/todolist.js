import React from 'react';
import './todolist.css';

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLol: false,
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

    handleClick(index) {
        this.setState((state) => {
            const array = state.ToDoArray;
            array[index] = {
                ...array[index],
                isChecked: !array[index].isChecked
            };
            console.log(array[index]);
            return {
                ToDoArray: [...array]
            }
        });

    };

    render() {
        return (
            <div>
                <p className={this.state.ToDoArray[0].isChecked ? "fin" : ""} onClick={() => this.handleClick(0)}>{this.state.ToDoArray[0].number}</p>
                <p className={this.state.ToDoArray[1].isChecked ? "fin" : ""} onClick={() => this.handleClick(1)}>{this.state.ToDoArray[1].number}</p>
            </div>
        )
    }
}

export default ToDoList;
