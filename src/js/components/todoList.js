import React, {Component} from "react"
import {todoStore} from '../reducer/todosReducer'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: todoStore.getState(),
            currentTodo: 0,
            currentText: ""
        };


        todoStore.subscribe(() => {
            this.setState({
                todos: todoStore.getState()
            });
        });

        this.toggle = this.toggle.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.updateText = this.updateText.bind(this);
    }

    toggle(e) {
        console.log("togle");
        todoStore.dispatch({type: 'TOGGLE_TODO', id: 0});

    };

    addTodo(e) {
        todoStore.dispatch({type: 'ADD_TODO', id: this.state.currentTodo, text: this.state.currentText});
        this.state.currentTodo += 1;
    };

    updateText(e) {
        this.state.currentText = e.target.value;
    }

    render() {
        let map = this.state.todos.map((item) => {
                return <div>
                    <span>{item.id}</span>
                    <input type="checkbox" value={item.completed} onChange={this.toggle}/>
                    <span>{item.text}</span>
                </div>
            }
        );
        return (
            <div>
                <div className='row'>
                    <input type="text" onChange={this.updateText}/>
                    <button onClick={this.addTodo}>Add To do</button>
                </div>
                <div className='row'>
                    {map}
                </div>
            </div>

        );
    }
}


module.exports = TodoList;