import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

import { payloadCreator } from "src/utils/helper"

import purchaseApi from "src/api/purchase.api"
import { logout } from "../Auth/auth.slice"

export const getCartPurchases = createAsyncThunk(
  "cart/getCartPurchases",
  payloadCreator(purchaseApi.getCartPurchases)
)

const cart = createSlice({
  name: "cart",
  initialState: {
    purchases: []
  },
  extraReducers: {
    [getCartPurchases.fulfilled]: (state, action) => {
      state.purchases = action.payload.data
    },
    [logout.fulfilled]: state => {
      state.purchases = []
    }
  }
})

const cartReducer = cart.reducer

export default cartReducer
