import React, {Component} from "react"
import store from '../store'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: store.getState().todos,
            currentTodo: 0,
            currentText: ""
        };

        store.subscribe(() => {
            this.setState({
                todos: store.getState().todos
            });
        });

        this.toggle = this.toggle.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.updateText = this.updateText.bind(this);
    }

    toggle(item, e) {
        store.dispatch({type: 'TOGGLE_TODO', id: item.id});

    };

    addTodo(e) {
        store.dispatch({type: 'ADD_TODO', id: this.state.currentTodo, text: this.state.currentText});
        this.state.currentTodo += 1;
    };

    updateText(e) {
        this.state.currentText = e.target.value;
    }

    render() {
        let map = this.state.todos.map((item) => {
                return <div key={item.id}>
                    <span>{item.id}</span>
                    <input type="checkbox" value={item.completed} onChange={this.toggle.bind(this, item)}/>
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