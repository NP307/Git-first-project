import React from 'react';
import '../ToDoList/ToDoList.css';

class ToDoRequest extends React.Component {
    constructor(props) {
        super(props);
        this.textChange = this.textChange.bind(this);
        this.state = {
            list: [],
            currentUserId: 0,
            textCheck: ''
        };
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

    handleClick = (index) => {
        this.setState((state) => {
            const array = state.list;
            array[index] = {
                ...array[index],
                completed: !array[index].completed
            };
            return {
                list: [...array]
            }
        });
    };

    textChange = (event) => {
        this.setState({textCheck: event.target.value})
    };

    render() {
        const { list, currentUserId } = this.state;
        const indexList = list.reduce((acc, item) => {
            if(acc.includes(item.userId)) {
                return [
                    ...acc
                ]
            } else {
                return [
                    ...acc,
                    item.userId
                ]
            }
        }, []).map((item) => {
            return (
                <button key={item} className="textAlign" onClick={() => {changeUserId(item)}}>{item}</button>
            )
        });
        const showListById = (id) => {
            return list.filter((item) => {
                if (id === 0) {
                    return true
                } else {
                    return item.userId === id
                }
            }).filter((item) => {
                if (item.title.includes(this.state.textCheck)) {
                    return item.title
                }
            }).map((item, index) => {
                return <li key={index} className={item.completed ? "fin pointerMouse" : "pointerMouse"} onClick={() => this.handleClick(index)} >{item.userId + '. ' + item.title}</li>
            })
        };
        const changeUserId = (id) => {
            this.setState({currentUserId: id})
        };
        if(list.length !== 0){
            return (
                <>
                    {indexList}
                    <button className="textAlign" onClick={() => {changeUserId(0)}}>All</button>
                    <input name='text' type='text' value={this.state.textCheck} onChange={this.textChange} />
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
