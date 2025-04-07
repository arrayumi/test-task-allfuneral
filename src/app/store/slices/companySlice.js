import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../../shared/api";

const initialState = {
  companyData: null,
};

export const getCompany = createAsyncThunk(
  "company/getData",
  async function (_, { rejectWithValue }) {
    try {
      const res = await api.getCompany();
      return res.data;
    } catch (err) {
      const errorData = {
        message: err.response.data.error,
        code: err.code,
      };
      return rejectWithValue(errorData);
    }
  }
);

const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCompany.fulfilled, (state, action) => {
      state.companyData = action.payload;
    });
    builder.addCase(getCompany.rejected, (state, action) => {
      state.errMessage = action.payload?.message || "error";
    });
  },
});

export default companySlice.reducer;
