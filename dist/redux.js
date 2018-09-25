'use strict';

var _redux = require('redux');

// initialState -> store
// view -> action -> reducer(state, action) -> newState
//  reducer() - pure function - the same parameters, 
// actions and returns (state) -- (dispatcher - flux)

var initialState = {
    name: 'Paul',
    secondName: 'Petrov'
};

// function reducer(state, action) {
//     switch (action.type) {
//         case 'CHANGE_NAME':
//             return { ...state, name: action.payload }
//         case 'CHANGE_SECOND_NAME':
//             return {...state, secondName: action.payload}
//         default:
//             return [...state, action.payload]
//     }
// };

var store = (0, _redux.createStore)(reducer, initialState);

console.log(store.getState());

var changeName = {
    type: 'CHANGE_NAME',
    payload: 'Ivan'
};

var changeSecondName = {
    type: 'CHANGE_SECOND_NAME',
    payload: 'Ivanov'
};

store.dispatch(changeName);
console.log(store.getState());
store.dispatch(changeSecondName);
console.log(store.getState());