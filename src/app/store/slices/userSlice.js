import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../../shared/api";

const initialState = {
  isAuthorized: localStorage.getItem("access") ?? false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsAuthorized(state, action) {
      state.isAuthorized = action.payload;
    },
  },
});

export const authorize = createAsyncThunk(
  "user/authorize",
  async function (_, { rejectWithValue }) {
    try {
      const res = await api.authorize();
      const token = res.headers.authorization;
      localStorage.setItem("access", token.split(" ")[1]);
    } catch (err) {
      const errorData = {
        message: err.response.data.error,
        code: err.code,
      };
      return rejectWithValue(errorData);
    }
  }
);

export const { setIsAuthorized } = userSlice.actions;

export default userSlice.reducer;
