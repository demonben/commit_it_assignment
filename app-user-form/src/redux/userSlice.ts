import { createSlice } from "@reduxjs/toolkit";

interface User {
  id: string;
  name: string;
  phoneNumber: number | null;
  password: any;
}

const initialState: User = {
  id: "",
  name: "",
  phoneNumber: null,
  password: null,
};

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
});

export const { changeUser } = userSlice.actions;

export default userSlice.reducer;
