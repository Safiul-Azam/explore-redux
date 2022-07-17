/**
 * state - count:0
 * action - decrement or increment or reset
 * reducer - handle logic operation
 * store - getState(), subscribe(), dispatch()
 */
const { createStore } = require('redux')

// define constructor
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const INCREMENT_COUNTER_VALUE = 'INCREMENT_COUNTER_VALUE'
const RESET = 'RESET'
const ADD_USER = 'ADD_USER'
// initialize state
const initialState = {
    count: 1,
    user:['azam']
}

// create action
const incrementCount = () => {
    return {
        type: INCREMENT
    }
}
const decrementCount = () => {
    return {
        type: DECREMENT
    }
}
const resetCount = () => {
    return {
        type: RESET
    }
}
const incrementCountByValue = (value) => {
    return {
        type: INCREMENT_COUNTER_VALUE,
        payload:value
    }
}
const incrementUser = (user) => {
    return {
        type: ADD_USER,
        payload:user
    }
}
// create Reducer
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                count: state.count + 1
            }

        case DECREMENT:
            return {
                count: state.count - 1
            }
        case INCREMENT_COUNTER_VALUE:
            return {

                count: state.count + action.payload
            }
        case ADD_USER:
            return {
                users:[...state.user , action.payload],
                count: state.count + 1
            }

        case RESET:
            return {
                count: 0
            }

        default:
            state
    }
}

// CREATE STORE
const store = createStore(counterReducer)

// subscribe store
store.subscribe(()=>{
    console.log(store.getState());
})
// store.dispatch(incrementCount())
// store.dispatch(incrementCount())
// store.dispatch(decrementCount())
// store.dispatch(incrementCountByValue(10))
// store.dispatch(resetCount())
store.dispatch(incrementUser('safiul'))