import {configureStore} from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { dummyJsonApi } from "../services/dummyJsonApi";


export const store = configureStore({
    reducer:{
        [dummyJsonApi.reducerPath] : dummyJsonApi.reducer,
        

    },
    middleware:(getDefaultMiddleware)=>{
        return getDefaultMiddleware()
        .concat(dummyJsonApi.middleware)
     

    }
        
});

setupListeners(store.dispatch);

    //connceted Api to the store