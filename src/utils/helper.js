// Check email
export const isEmail = value =>
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    value
  )

// Hàm trả về asyncThunk
export const payloadCreator = asyncFunc => async (data, thunkAPI) => {
  try {
    const res = await asyncFunc(data)
    return res
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
}
//  /\s/g => ' ', /%/ => %
export const generateNameId = ({ name, _id }) =>
  encodeURIComponent(`${name.replace(/\s/g, "-").replace(/%/g, "")}-i.${_id}`)

// Get ID from name Id
export const getIdFromNameId = url => {
  const arr = url.split("-i.")
  return arr[arr.length - 1]
}

// sale percent
export const SalePercent = (original, sale) =>
  Math.round(((original - sale) / original) * 100) + "%"

// Format money
export const formatMoney = (value, character = ".") =>
  String(value).replace(/\B(?=(\d{3})+(?!\d))/g, character)
