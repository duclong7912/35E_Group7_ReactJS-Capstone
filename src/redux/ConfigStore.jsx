import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/userReducer/userReducer';
import productReducer from './reducers/ProductReducer/productReducer';


export const store = configureStore({
    reducer: {
        userReducer: userReducer,
        productReducer: productReducer,
    }
});

