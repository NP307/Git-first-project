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

    /*componentDidMount() {
        setInterval(() => {
            console.log(this.state, this.props);
        }, 2000)
    }*/

    handleClick(index) {
        /*this.setState((state, props) => {
            const array = state.ToDoArray.map((item, innerIndex) => {
                if(outerIndex === innerIndex) {
                    item.isChecked = !item.isChecked;
                }
                console.log(item, props);
                return item
            })


            return {
                ToDoArray: array
            }
        });*/

        /*let key = 2;
        this.setState(prevState => ({

            ToDoArray: prevState.ToDoArray.map(
                el => el.key === key? { ...el, isChecked: true }: el
            )

        }));*/

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

        /*this.setState((state) => {
            let array = state.isLol;
            array = !array;
            return {
                isLol: array
            }
        });*/
        console.log(this.state);

    };

    render() {
        /*let ToDoList = this.ToDoArray.map((list,index) => {
            return <li onClick={() => {this.ToDoArray[index].isChecked = !this.ToDoArray[index].isChecked}} className={list.isChecked ? "fin" : ""} key={index}>{list.number}</li>
        });
        return (
            <ul>{ToDoList}</ul>
        )*/



        return (
            <div>
                <p className={this.state.ToDoArray[0].isChecked ? "fin" : ""} onClick={() => this.handleClick(0)}>{this.state.ToDoArray[0].number}</p>
                <p className={this.state.ToDoArray[1].isChecked ? "fin" : ""} onClick={() => this.handleClick(1)}>{this.state.ToDoArray[1].number}</p>
            </div>
        )
    }
}

export default ToDoList;
