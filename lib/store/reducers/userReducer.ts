import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../index";
import { User as FirebaseUser } from "firebase/auth";

// Define a type for the user state
interface UserType {
  user: FirebaseUser | null;
}

// Define the initial state using that type
const initialState: UserType = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    signInToAccount: (state, action: PayloadAction<FirebaseUser>) => {
      state.user = action.payload;
    },
    signOutFromAccount: (state) => {
      state.user = null;
    },
  },
});

export const { signInToAccount, signOutFromAccount } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;
