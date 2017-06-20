/**
 * Separate one 'to do' from 'to do' list
 */
const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case 'TOGGLE_TODO':
            if (state.id !== action.id) {
                return state;
            }
            return {
                ...state,
                completed: !state.completed
            };

        default:
            return state;
    }
};

const todosReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todoReducer(undefined, action)
            ];
        case 'TOGGLE_TODO':
            return state.map(todo =>
                todoReducer(todo, action)
            );
        default:
            return state;
    }
};

module.exports = todosReducer;