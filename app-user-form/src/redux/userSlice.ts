import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "./userAPI";

export interface User {
  id: string;
  name: string;
  phoneNumber: number | null;
  password: any;
  status: "idle" | "loading" | "failed";
}

const initialState: User = {
  id: "",
  name: "",
  phoneNumber: null,
  password: null,
  status: "idle",
};

export const incrementAsync = createAsyncThunk(
  "counter/fetchCount",
  async (user: any) => {
    const response = await fetchUser(user);
    return response.data;
  }
);

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    changeUser(state, action) {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.phoneNumber = action.payload.phoneNumber;
      state.password = action.payload.password;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.id = action.payload.id;
        state.name = action.payload.name;
        state.phoneNumber = action.payload.phoneNumber;
        state.password = action.payload.password;
      })
      .addCase(incrementAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { changeUser } = userSlice.actions;

export default userSlice.reducer;
