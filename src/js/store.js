import {combineReducers, createStore} from "redux";
import counterReducer from './reducer/counter'
import todosReducer from './reducer/todosReducer'
import visibilityFilter from './reducer/visibilityFilter'


/**
 * when action comes in it calls the reducers with parts of the state it manages and combines new state into a single object
 * @param state
 * @param action
 * @returns {{todos, counter, visibilityFilter}}
 */
// const app = (state = {}, action) => {
//     return {
//         todos: todosReducer(
//             state.todos,
//             action
//         ),
//         counter: counterReducer(
//             state.counter,
//             action
//         ),
//         visibilityFilter: visibilityFilter(
//             state.visibilityFilter,
//             action
//         )
//     };
// };
// above code is the same as calling combineReducers
const reducer = combineReducers({
    todos: todosReducer,
    counter: counterReducer,
    visibilityFilter
});

const store = createStore(reducer);

function logState() {
    console.log(store.getState());
}
logState();
store.subscribe(() => {
    logState();
});

module.exports = store;

