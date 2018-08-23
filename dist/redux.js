'use strict';

var _redux = require('redux');

//const createStore = require('redux');

// initialState -> store
// view -> action -> reducer(state, action) -> newState
//  reducer() - pure function - the same parameters, 
// actions and returns (state) -- (dispatcher - flux)

initialState = {
    name: 'Paul',
    secondName: 'Petrov'
};

function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    console.log(state);
};

var store = (0, _redux.createStore)();

var changeName = {
    type: 'CHANGE_NAME',
    payload: 'Ivan'
};

var changeSecondName = {
    type: 'CHANGE_SECOND_NAME',
    payload: 'Ivanov'
};

store.dispatch(changeName);