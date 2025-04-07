import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isEditCompanyNameModalOpen: false,
  isDeleteCompanyModalOpen: false,
};

const modalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    setIsEditCompanyNameModalOpen(state, action) {
      state.isEditCompanyNameModalOpen = action.payload;
    },
    setIsDeleteCompanyModalOpen(state, action) {
      state.isDeleteCompanyModalOpen = action.payload;
    },
  },
});

export const { setIsDeleteCompanyModalOpen, setIsEditCompanyNameModalOpen } =
  modalsSlice.actions;

export default modalsSlice.reducer;
