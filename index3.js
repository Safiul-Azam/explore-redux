const { createStore } = require("redux")

/**
 * state - count:0
 * action - decrement or increment or reset
 * reducer - handle logic operation
 * store - getState(), subscribe(), dispatch()
 */
const initialCountValue = {
    count: 0,
    user:['safiul']
}
const  INCREMENT = 'INCREMENT'
const  DECREMENT = 'DECREMENT'
const  RESET = 'RESET'
const  ADD_USER = 'ADD_USER'
const  INCREMENT_COUNTER_BY_VALUE = 'INCREMENT_COUNTER_BY_VALUE'
const incrementCount = ()=>{
    return {
        type:INCREMENT
    }
}
const  decrementCount = ()=>{
    return {
        type:DECREMENT
    }
}
const resetCount = ()=>{
    return {
        type:RESET
    }
}
const incrementCountByValue = (value)=>{
    return {
        type:INCREMENT_COUNTER_BY_VALUE,
        payload:value
    }
}
const addUser = (value)=>{
    return {
        type:ADD_USER,
        payload:value
    }
}

const counterReducer = (state= initialCountValue, action)=>{
   switch (action.type) {
    case INCREMENT:
        return{
            ...state,
            count:state.count + 1
        }
    case DECREMENT:
        return{
            ...state,
            count:state.count - 1
        }
    case INCREMENT:
        return{
            ...state,
            count:0
        }
    case INCREMENT_COUNTER_BY_VALUE:
        return{
            ...state,
            count:state.count + action.payload
        }
    case ADD_USER:
        return{
            user:[...state.user , action.payload],
            count:state.count + 1
        }
   
    default:
        state
   } 
}
const store = createStore(counterReducer)
store.subscribe(()=>{
    console.log(store.getState())
})
// store.dispatch(incrementCountByValue(9))
store.dispatch(addUser('azam'))