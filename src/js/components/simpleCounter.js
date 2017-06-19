import React from "react"
import store from '../stores/store';

class SimpleCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: store.getState()};

        store.subscribe(() => {
            this.setState({
                value: store.getState()
            });
        });

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment(e) {
        store.dispatch({type: 'INCREMENT'});
    };

    decrement(e) {
        store.dispatch({type: 'DECREMENT'});
    };

    render() {
        return (
            <div className='row'>
                <h2>Counter Example</h2>
                <div className="col-md-1">
                    <button className="btn btn-default" onClick={this.increment}>+</button>
                    <button className="btn btn-default" onClick={this.decrement}>-</button>
                </div>
                <div className="col-md-2">
                    <h4>Value: {this.state.value}</h4>
                </div>
            </div>
        );
    }
}

module.exports = SimpleCounter;