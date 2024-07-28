const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    numOfCakes : 10,
}

const cakeSlice = createSlice({
    name:'cake',
    // initialState:initialState - if both are same then we write it just by single name
    initialState,
    reducers:{
        // immer by default creates the action creators for this i.e., ordered and restocked
        ordered:(state)=>{
            state.numOfCakes--
        },
        restocked:(state, action)=>{
            state.numOfCakes += action.payload
        },
    }
})

module.exports = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions