import { createAsyncThunk } from "@reduxjs/toolkit"
import { payloadCreator } from "src/utils/helper"
import purchaseApi from "src/api/purchase.api"

export const getPurchase = createAsyncThunk(
  "user/getPurchases",
  payloadCreator(purchaseApi.getPurchases)
)
