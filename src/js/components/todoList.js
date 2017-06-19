import React from "react"
import store from '../stores/store';
import todos from '../reducer/todos'

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        // store.subscribe(() => {
        //     this.setState({
        //         value: store.getState()
        //     });
        // });

        // this.increment = this.increment.bind(this);
    }

    // increment(e) {
    // };

    render() {
        return (
            <div className='row'>
                <h2>To Do List Example</h2>
            </div>
        );
    }
}


module.exports = TodoList;