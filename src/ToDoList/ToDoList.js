import React from 'react';
import './ToDoList.css';

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const list = this.props.ToDoArray.map((el, index) => {
            return <li key={index} className={el.isChecked ? "fin pointerMouse" : "pointerMouse"} onClick={() => this.props.handleClick(index)}>{el.number}</li>
        });
        return <ul>{list}</ul>
    }
}

export default ToDoList;
