import './todolist.css';

function ToDoList() {
    let ToDoArray = [
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
    ];
    let ToDoList = ToDoArray.map((list,index) => {
        return <li onClick={() => {ToDoArray[index].isChecked = !ToDoArray[index].isChecked}} className={list.isChecked ? "fin" : ""} key={index}>{list.number}</li>
    });
    return (
        <ul>{ToDoList}</ul>
    )
}

export default ToDoList;
