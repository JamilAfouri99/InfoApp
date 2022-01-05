import { createSlice,configureStore } from '@reduxjs/toolkit';

const dataSlice = createSlice({
    name:'data',
    initialState:{
        data:{}
    },
    reducers:{
        handleData(state,action){
            state.data = action.payload
        }
    }
}); 

const store = configureStore({
    reducer:dataSlice.reducer
});

export const actions = dataSlice.actions

export default store