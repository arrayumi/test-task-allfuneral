import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isAuthorized: localStorage.getItem("access") ?? false,
  isPageLoading: false,
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

export const { setIsAuthorized } = userSlice.actions;

export default userSlice.reducer;
