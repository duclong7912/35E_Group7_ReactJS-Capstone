import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/userReducer/userReducer';


export const store = configureStore({
    reducer: {
        userReducer: userReducer
    }
});

