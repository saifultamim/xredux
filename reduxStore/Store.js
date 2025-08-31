import { configureStore } from "@reduxjs/toolkit";
 import counterReducer from '@/components/counter/CounterSlice'
const store = configureStore({
    reducer:{
        //counters reducer key
        counters: counterReducer,
        //other features
        //videos : videoReducer,
    }
})
export default store;