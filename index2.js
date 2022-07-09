const {createStore}  = require('redux');

const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"

// state
const initialCounterState = {
    count: 0,
}

// action - object- type 
const incrementCount = () => {
    return {
        type: INCREMENT,
    }
}
const decrementCount = () => {
    return {
        type: DECREMENT,
    }
}


//Reducer pure function
const counterReducer = (state = initialCounterState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            };
        case DECREMENT:
            return {
                ...state,
             count: state.count - 1
            }
        default:
            return state

    }
}

//store getState(), dispatch(), subscribe()
//create store
const store = createStore(counterReducer)
// subscribe store
store.subscribe(()=>{
    console.log(store.getState());
})
// dispatch store
store.dispatch(incrementCount())
store.dispatch(incrementCount())
store.dispatch(incrementCount())
store.dispatch(decrementCount())
store.dispatch(incrementCount())