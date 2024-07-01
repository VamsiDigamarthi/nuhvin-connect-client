import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { API } from "../../Core/urls";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

export const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
  const token = localStorage.getItem("token");

  return API.get("https://jsonplaceholder.typicode.com/users", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => response.data);
});

const profileSlice = createSlice({
  name: "profile",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
    });
  },
});

export default profileSlice.reducer;
