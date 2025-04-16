import { getGoodPriceData } from "@/service/module/home";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// 异步请求
export const fetchGoodPriceData = createAsyncThunk("fetchGoodPriceData", async (payload) => {
  const res = await getGoodPriceData();
  return res;
});
const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
  },
  reducers: {},
  // 判断异步请求完成，存储数据
  extraReducers: (builder) => {
    builder.addCase(fetchGoodPriceData.fulfilled, (state, action) => {
      state.goodPriceInfo = action.payload;
    });
  },
});

export default homeSlice.reducer;
