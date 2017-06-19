import deepFreeze from 'deep-freeze';
import expect from 'expect';
import todos from '../reducer/todos'


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
        todos(stateBefore, action)
    ).toEqual(stateAfter);
};

const testAll = () => {
    testAddTodo();
    console.log("all tesets passed");
};

module.exports = testAll;
