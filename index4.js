const { createStore, combineReducers } = require("redux")

/**
 * create a state
 * create action
 * create reducer
 * create store and then subscribe(getState()) then dispatch
 */
//PRODUCT CONSTANT
const GET_PRODUCTS = 'GET_PRODUCTS'
const ADD_PRODUCT = 'ADD_PRODUCT'
// CART CONSTANT
const GET_CART = 'GET_CART'
const ADD_CART = 'ADD_CART'
// PRODUCT STATE
const productsState = {
    products:['apple', 'orange','banana'],
    productCount:3
}
//CART STATE
const cartState = {
    cart:['apple'],
    productCount:1
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
//CART ACTION
const getCart = ()=>{
    return {
        type:GET_CART,
    }
}
const addCart = (product)=>{
    return {
        type:ADD_CART,
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
//CART REDUCER
const cartReducer = (state=cartState, action)=>{
    switch (action.type) {
        case GET_CART:
            return{
                ...state
            }
        case ADD_CART:
            return{
                cart:[...state.cart, action.payload],
                productCount:state.productCount + 1
                
            }
    
        default:
           return state;
    }
}
const rootReducer = combineReducers({
    productR:productsReducer,
    cartR:cartReducer
})
const store = createStore(rootReducer)
store.subscribe(()=>{
    console.log(store.getState())
})
store.dispatch(getProducts())
store.dispatch(addProducts('gray'))
store.dispatch(getCart())
store.dispatch(addCart('gray'))