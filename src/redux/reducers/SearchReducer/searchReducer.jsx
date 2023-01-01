import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {
    arrCategory: null,
    arrProduct: null
}

const searchReducer = createSlice({
  name: 'searchReducer',
  initialState,
  reducers: {
    categoryAction: (state, action) => {
        state.arrCategory = action.payload;
    },
    productAction: (state, action) => {
        state.arrProduct = action.payload;
    }
  }
});

export const {categoryAction, productAction} = searchReducer.actions
export default searchReducer.reducer;

//  async action

export const getAllProductAPI = () => {
    return async (dispatch) => {
        const result = await axios({
            url: 'https://shop.cyberlearn.vn/api/Product',
            method: 'GET',
        })
        const action = productAction(result.data.content);
        dispatch(action);
    }
}

export const getAllCategoryAPI = () => {

    return async (dispatch) => {
        const result = await axios({
            url: 'https://shop.cyberlearn.vn/api/Product/getAllCategory',
            method: "GET",
        });
        const action = categoryAction(result.data.content);
        dispatch(action)
    }
}

export const getProductByCategoryAPI = (id) => {
     return async (dispatch) => {
        const result = await axios({
            url: `https://shop.cyberlearn.vn/api/Product/getProductByCategory?categoryId=${id}`,
            method: 'GET',
        });
        const action = productAction(result.data.content);
        dispatch(action)
     }
}

export const getProductByKeywordAPI = (keyword) => {
    return async (dispatch) => {
        const result = await axios ({
            url: `https://shop.cyberlearn.vn/api/Product?keyword=${keyword}`,
            method: "GET",
        });
        const action = productAction(result.data.content);
        dispatch(action);
    }
}