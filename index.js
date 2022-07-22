const { createStore } = require("redux")

/**
 * create a state
 * create action
 * create reducer
 * create store and then subscribe(getState()) then dispatch
 */
const GET_PRODUCTS = 'GET_PRODUCTS'
const ADD_PRODUCT = 'ADD_PRODUCT'
const productsState = {
    products:['apple', 'orange','banana'],
    productCount:3
}
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
            state;
    }
}
const store = createStore(productsReducer)
store.subscribe(()=>{
    console.log(store.getState())
})
store.dispatch(getProducts())
store.dispatch(addProducts('gray'))