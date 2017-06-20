import deepFreeze from 'deep-freeze';
import expect from 'expect';
import todosReducer from '../reducer/todosReducer'


const testAddTodo = () => {
    const stateBefore = [];
    const action = {
        type: 'ADD_TODO',
        id: 0,
        text: 'Learn redux'
    };

    const stateAfter = [{
        id: 0,
        text: 'Learn redux',
        completed: false
    }];

    deepFreeze(stateBefore);
    deepFreeze(stateAfter);

    expect(
        todosReducer(stateBefore, action)
    ).toEqual(stateAfter);
};

const testToggleTodo = () => {
    const stateBefore = [
        {
            id: 0,
            text: 'Learn redux',
            completed: false
        },
        {
            id: 1,
            text: 'Go shopping',
            completed: false
        }
    ];
    const action = {
        type: 'TOGGLE_TODO',
        id: 0,
    };

    const stateAfter = [
        {
            id: 0,
            text: 'Learn redux',
            completed: true
        },
        {
            id: 1,
            text: 'Go shopping',
            completed: false
        }
    ];

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
        todosReducer(stateBefore, action)
    ).toEqual(stateAfter);

};


const testAll = () => {
    testAddTodo();
    testToggleTodo();
    console.log("all tesets passed");
};

module.exports = testAll;
