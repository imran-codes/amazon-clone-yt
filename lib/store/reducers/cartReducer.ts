import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { CartType } from "../../../types/cart";

// Define a type for the slice state
interface CartState {
  items: CartType[];
}

// Define the initial state using that type
const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartType>) => {
      state.items = [...state.items, action.payload];
    },
    removeFromCart: (state, action: PayloadAction<{ id: string }>) => {
      //...use id that we have passed and remove the item from basket with that id

      let newBasket = [...state.items];

      // find index of first item in basket
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      console.log(index, "index");

      if (index !== -1) {
        //splice item out of basket
        newBasket.splice(index, 1);
        state.items = newBasket;
      } else {
        console.warn(`Can't remove product as its not in basket`);
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCartItems = (state: RootState) => state.cart.items;

export const selectCartItemsCount = (state: RootState) =>
  state.cart.items.length;

export const selectCartTotal = (state: RootState) => {
  const totalAmount = state.cart.items.reduce(
    (total, item) => (total += item.price),
    0
  );
  return totalAmount;
};

export default cartSlice.reducer;
