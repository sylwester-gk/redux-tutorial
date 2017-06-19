const Dispatcher = require('flux').Dispatcher;
const assign = require('react/lib/Object.assign');

const  AppDispatcher = assign(new Dispatcher() , {
    handleViewEvent: function (action) {
        this.dispatch({
            source: 'VIEW_ACTION',
            action: action
        })
    }
});

module.exports = AppDispatcher;