const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"

// state
const initialCounterState ={
    count:0,
}
const initialUserState = [
    {name:'safiul'}
]
// action - object- type 
const incrementCount = () => {

    return {
        type:INCREMENT,
    }
}
const decrementCount = ()=>{
    return {
        type:DECREMENT,
    }
}
