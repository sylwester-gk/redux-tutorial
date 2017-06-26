import React, {Component} from "react"
import store from '../store'
import FilterLink from './FilterLink'

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case "SHOW_ALL":
            return todos;
        case  "SHOW_ACTIVE":
            return todos.filter( item => !item.completed);
        case "SHOW_COMPLETED":
            return todos.filter( item => item.completed);
        default:
            return todos;
    }
};

class TodoList extends Component {
    constructor(props) {
        super(props);
        let state = store.getState();
        this.state = {
            todos: getVisibleTodos(state.todos, this.props.filter),
            currentTodo: 0,
            filter: state.visibilityFilter
        };

        store.subscribe(() => {
            let state = store.getState();
            this.setState({
                todos:  getVisibleTodos(state.todos, state.visibilityFilter),
                filter: state.visibilityFilter,
            });
        });

        this.toggle = this.toggle.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }

    toggle(item, e) {
        store.dispatch({type: 'TOGGLE_TODO', id: item.id});
    };

    addTodo(e) {
        store.dispatch({type: 'ADD_TODO', id: this.state.currentTodo++, text: this.input.value});
    };

    render() {
        return (
            <div>
                <div className='row'>
                    <input ref={node => {
                        this.input = node
                    } }/>
                    <button onClick={this.addTodo}>Add To do</button>
                </div>
                <div className='row'>
                    <ul>
                    {
                        this.state.todos.map(item =>
                            <li key={item.id}>
                                <input type="checkbox"
                                       value={item.completed}
                                       onChange={this.toggle.bind(this, item)}
                                       checked={item.completed}/>&nbsp;
                                <span onClick={() => {
                                            this.toggle(item);
                                        }}
                                      style={{textDecoration: item.completed ? 'line-through' : 'none'}}
                                >{item.id}. {item.text}</span>
                            </li>
                        )}
                    </ul>
                </div>
                <div className="row">
                    <FilterLink
                        filter="SHOW_ALL"
                        currentFilter={this.state.filter}
                    >ALL</FilterLink>
                    {" | "}
                    <FilterLink
                        filter="SHOW_ACTIVE"
                        currentFilter={this.state.filter}
                    >ACTIVE</FilterLink>
                    {" | "}
                    <FilterLink
                        filter="SHOW_COMPLETED"
                        currentFilter={this.state.filter}
                    >COMPLETED</FilterLink>
                </div>
            </div>

        );
    }
}


module.exports = TodoList;