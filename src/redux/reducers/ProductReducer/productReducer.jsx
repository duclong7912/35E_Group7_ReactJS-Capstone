import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { TOKEN, USER, getCookie, getLocalStorage } from "../../../util/config";

const initialState = {
  arrProduct: null,
  arrProductFavorite: null,
  productDetail: null,
  arrCategory: null,
  arrProductCart: [],
};

const productReducer = createSlice({
  name: "productReducer",
  initialState,
  reducers: {
    productAction: (state, action) => {
      state.arrProduct = action.payload;
    },
    productFavoriteAction: (state, action) => {
      state.arrProductFavorite = action.payload;
    },
    productDetailAction: (state, action) => {
        state.productDetail = action.payload
    },
    categoryAction: (state, action) => {
      state.arrCategory = action.payload;
    },
    productCartAction: (state, action) => {
      const itemCart = state.arrProductCart.find(item => item.id === action.payload.id);
      if (itemCart) {
        itemCart.quantity += 1;
      } else {
        state.arrProductCart.push(action.payload);
      }
    },
    changeQuantityAction: (state, action) => {
      const {id, quantity} = action.payload;
      const itemCart = state.arrProductCart.find(item => item.id === id)
      if (itemCart) {
        itemCart.quantity += quantity;
        if(itemCart.quantity < 1) {
          itemCart.quantity -= quantity;
        }
      }
    },
    deleteProductCartAction: (state, action) => {
      state.arrProductCart = state.arrProductCart.filter(item => item.id !== action.payload);
    },
    filterProductAction: (state, action) => {
      state.arrProduct = action.payload;
    }
  },
});

export const { productAction, productFavoriteAction, productDetailAction, categoryAction, productCartAction, changeQuantityAction, deleteProductCartAction, filterProductAction } = productReducer.actions;

export default productReducer.reducer;

// action async

export const getAllProductAPI = () => {
  return async (dispatch) => {
    const result = await axios({
      url: "https://shop.cyberlearn.vn/api/Product",
      method: "GET",
    });
    const action = productAction(result.data.content);
    dispatch(action);
  };
};

export const getProductFavoriteAPI = () => {
  return async (dispatch) => {
    let token = getLocalStorage(USER);
    const result = await axios({
      url: "https://shop.cyberlearn.vn/api/Users/getproductfavorite",
      method: "GET",
      headers: {
        Authorization: `Bearer ${token?.accessToken}`,
      },
    });
    const action = productFavoriteAction(result.data.content);
    dispatch(action);
  };
};

export const likeProductAPI = async (id) => {
  try {
    return await axios({
      url: `https://shop.cyberlearn.vn/api/Users/like?productId=${id}`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${getCookie(TOKEN)}`,
      },
    });
  } catch (error) {
    console.log({ error });
  }
};

export const unLikeProductAPI = async (id) => {
    try {
      return await axios({
        url: `https://shop.cyberlearn.vn/api/Users/unlike?productId=${id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${getCookie(TOKEN)}`,
        },
      });
    } catch (error) {
      console.log({ error });
    }
};

export const getProductByIdAPI = (id) => {
    return async (dispatch) => {
        const result = await axios({
            url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
            method: 'GET',
        })

        if(result) {
            const action = productDetailAction(result.data.content);
            dispatch(action)
        }
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

export const orderProductAPI =(itemCart) => {
  console.log(itemCart);
  return async (dispatch) => {
    const result = await axios({
      url: 'https://shop.cyberlearn.vn/api/Users/order',
      method: "POST",
      data: itemCart,
    })
  }
}
