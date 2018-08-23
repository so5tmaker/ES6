import { createStore } from 'redux';

// initialState -> store
// view -> action -> reducer(state, action) -> newState
//  reducer() - pure function - the same parameters, 
// actions and returns (state) -- (dispatcher - flux)

const initialState = {
    name: 'Paul',
    secondName: 'Petrov'
};

function reducer(state, action) {
    switch (action.type) {
        case 'CHANGE_NAME':
            return { ...state, name: action.payload }
        case 'CHANGE_SECOND_NAME':
            return {...state, secondName: action.payload}
        default:
            return [...state, action.payload]
    }
};

const store = createStore(reducer, initialState);

console.log(store.getState());

const changeName = {
    type: 'CHANGE_NAME',
    payload: 'Ivan'
};

const changeSecondName = {
    type: 'CHANGE_SECOND_NAME',
    payload: 'Ivanov'
};

store.dispatch(changeName);
console.log(store.getState());
store.dispatch(changeSecondName);
console.log(store.getState());