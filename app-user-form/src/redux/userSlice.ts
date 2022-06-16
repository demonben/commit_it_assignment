import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    user: { id: "", name: "", phoneNumber: null, password: null },
  },
  reducers: {
    addUser(state: any, action) {
      state.user.id = action.payload.id;
      state.user.name = action.payload.name;
      state.user.phoneNumber = action.payload.phoneNumber;
      state.user.password = action.payload.password;
    },
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
