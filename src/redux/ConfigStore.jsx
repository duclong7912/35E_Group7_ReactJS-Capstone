import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/userReducer/userReducer';
import searchReducer from './reducers/SearchReducer/searchReducer';


export const store = configureStore({
    reducer: {
        userReducer: userReducer,
        searchReducer: searchReducer,
    }
});

