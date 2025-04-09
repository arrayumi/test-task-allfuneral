import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../../shared/api";

import {
  setIsEditCompanyNameModalOpen,
  setIsDeleteCompanyModalOpen,
} from "./modalsSlice";

const initialState = {
  companyData: null,
  companyContact: null,
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

export const getContact = createAsyncThunk(
  "company/getContact",
  async function (_, { rejectWithValue }) {
    try {
      const res = await api.getContact();
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

export const patchCompany = createAsyncThunk(
  "company/patchData",
  async function (data, { rejectWithValue }) {
    try {
      await api.patchCompany(data);
      return data;
    } catch (err) {
      const errorData = {
        message: err.response.data.error,
        code: err.code,
      };
      return rejectWithValue(errorData);
    }
  }
);

export const deleteCompany = createAsyncThunk(
  "company/delete",
  async function (_, { rejectWithValue, dispatch }) {
    try {
      await api.deleteCompany();
      dispatch(setIsDeleteCompanyModalOpen(false));
    } catch (err) {
      const errorData = {
        message: err.response.data.error,
        code: err.code,
      };
      return rejectWithValue(errorData);
    }
  }
);

export const patchCompanyName = createAsyncThunk(
  "company/patchCompanyName",
  async function (data, { rejectWithValue, dispatch }) {
    try {
      await api.patchCompany(data);
      dispatch(setIsEditCompanyNameModalOpen(false));
      return data;
    } catch (err) {
      const errorData = {
        message: err.response.data.error,
        code: err.code,
      };
      return rejectWithValue(errorData);
    }
  }
);

export const patchContact = createAsyncThunk(
  "company/patchContact",
  async function (data, { rejectWithValue }) {
    try {
      await api.patchContact(data);
      return data;
    } catch (err) {
      const errorData = {
        message: err.response.data.error,
        code: err.code,
      };
      return rejectWithValue(errorData);
    }
  }
);

export const sendNudes = createAsyncThunk(
  "company/sendFiles",
  async function (data, { rejectWithValue }) {
    try {
      await api.addCompanyImage(data);
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

    builder.addCase(getContact.fulfilled, (state, action) => {
      state.companyContact = action.payload;
    });
    builder.addCase(getContact.rejected, (state, action) => {
      state.errMessage = action.payload?.message || "error";
    });

    builder.addCase(patchCompany.fulfilled, (state, action) => {
      state.companyData = { ...state.companyData, ...action.payload };
    });
    builder.addCase(patchCompany.rejected, (state, action) => {
      state.errMessage = action.payload?.message || "error";
    });

    builder.addCase(patchContact.fulfilled, (state, action) => {
      state.companyContact = { ...state.companyContact, ...action.payload };
    });
    builder.addCase(patchContact.rejected, (state, action) => {
      state.errMessage = action.payload?.message || "error";
    });

    builder.addCase(patchCompanyName.fulfilled, (state, action) => {
      state.companyData = { ...state.companyData, ...action.payload };
    });
    builder.addCase(patchCompanyName.rejected, (state, action) => {
      state.errMessage = action.payload?.message || "error";
    });
  },
});

export default companySlice.reducer;
