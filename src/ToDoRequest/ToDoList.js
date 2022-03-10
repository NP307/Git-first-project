import React from 'react';
import '../ToDoList/ToDoList.css'

class ToDoRequest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            currentUserId: 0
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    list: json
                })
            })
    }

    /*handleClick = (index) => {
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
    };*/

    render() {
        const { list, currentUserId } = this.state;
        const showListById = (id) => {
            return list.filter((item) => {
                if (id === 0) {
                    return true
                } else {
                    return item.userId === id
                }
            }).map((item, index) => {
                return <li key={index}>{item.userId + '. ' +item.title}</li>
            })
        };
        const changeUserId = (id) => {
            this.setState({currentUserId: id})
        };
        if(list.length !== 0){
            return (
                <>
                    <button className="textAlign" onClick={() => {changeUserId(1)}}>1</button>
                    <button className="textAlign" onClick={() => {changeUserId(2)}}>2</button>
                    <button className="textAlign" onClick={() => {changeUserId(3)}}>3</button>
                    <button className="textAlign" onClick={() => {changeUserId(0)}}>All</button>
                    <ul className="textAlign" >{showListById(currentUserId)}</ul>
                </>
            )
        }
        else {
            return (
                <div>asd</div>
            )
        }
    }
}

export default ToDoRequest;
