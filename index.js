const { createStore, applyMiddleware } = require("redux")
const { default: logger } = require("redux-logger")

/**
 * create a state
 * create action
 * create reducer
 * create store and then subscribe(getState()) then dispatch
 */
//PRODUCT CONSTANT
const GET_PRODUCTS = 'GET_PRODUCTS'
const ADD_PRODUCT = 'ADD_PRODUCT'
// PRODUCT STATE
const productsState = {
    products:['apple', 'orange','banana'],
    productCount:3
}
// PRODUCTS ACTION
const getProducts = ()=>{
    return {
        type:GET_PRODUCTS,
    }
}
const addProducts = (product)=>{
    return {
        type:ADD_PRODUCT,
        payload:product
    }
}
//PRODUCTS REDUCER
const productsReducer = (state=productsState, action)=>{
    switch (action.type) {
        case GET_PRODUCTS:
            return{
                ...state
            }
        case ADD_PRODUCT:
            return{
                products:[...state.products, action.payload],
                productCount:state.productCount + 1
                
            }
    
        default:
           return state;
    }
}
const store = createStore(productsReducer, applyMiddleware(logger))
store.subscribe(()=>{
    console.log(store.getState())
})
store.dispatch(getProducts())
store.dispatch(addProducts('gray'))