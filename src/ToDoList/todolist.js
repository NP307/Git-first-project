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
        const list = this.state.ToDoArray.map((el, index) => {
            return <li key={index} className={el.isChecked ? "fin" : ""} onClick={() => this.handleClick(index)}>{el.number}</li>
        });
        return <ul>{list}</ul>
    }
}

export default ToDoList;
