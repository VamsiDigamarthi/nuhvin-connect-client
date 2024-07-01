import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../../Core/urls";

const initialState = {
  loading: false,
  token: "",
  error: "",
};

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userData) => {
    const response = await API.post("/auth/login", userData);
    return response.data.token;
  }
);

const tokenSlice = createSlice({
  name: "token",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.token = action.payload;
      state.error = "";
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.token = "";
      state.error = action.error.message;
    });
  },
});

export default tokenSlice.reducer;
