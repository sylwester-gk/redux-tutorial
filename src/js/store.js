import {createStore} from "redux";
import counterReducer from './reducer/counter'
import todosReducer from './reducer/todosReducer'

const app = (state = {}, action) => {
    return {
        todos: todosReducer(
            state.todos,
            action
        ),
        counter: counterReducer(
            state.counter,
            action
        )
    };
};


const store = createStore(app);

module.exports = store;

