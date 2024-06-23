import { createSlice } from "@reduxjs/toolkit";
import { getUserInfor } from "../auth/authThunk";

const initialState = {
  user: null,
  logoSubmit: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLogoSubmit: (state, action) => {
      state.logoSubmit = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserInfor.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export const { setLogoSubmit } = userSlice.actions;
export default userSlice.reducer;
