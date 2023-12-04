"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit/react";
import showData from "@/app/lib/shoes.json";
const retriveData = showData.shoes;
let shoes = retriveData.map((shoe) => ({
  ...shoe,
  amount: 1,
  isLoading: true,
}));
interface cartType {
  id: number;
  image: string;
  name: string;
  description: string;
  color: string;
  price: number;
  amount: number;
  isLoading: boolean;
}
const initialState = {
  cartItems: [] as cartType[],
  products: shoes,
  total: 0,
  isLoading: false,
};
export const cartSlice = createSlice({
  name: "Shopping Cart",
  initialState,
  reducers: {
    clearCard: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action: PayloadAction<cartType>) => {
      const Item = action.payload;
      state.cartItems = state.cartItems.filter((data) => data.id !== Item.id);
    },
    addToCard: (state, action: PayloadAction<cartType>) => {
      const Item = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === Item.id);
      state.products.map((item) =>
        item.id === Item.id ? (item.isLoading = false) : (item.isLoading = true)
      );

      if (existingItem) {
        existingItem.amount += 1;
      } else {
        state.cartItems.push(Item);
      }
    },
    increase: (state, action: PayloadAction<cartType>) => {
      const Item = action.payload;
      const existingItem = state.cartItems.find((data) => data.id === Item.id);
      if (existingItem) {
        existingItem.amount += 1;
      }
    },
    dicrease: (state, action: PayloadAction<cartType>) => {
      const Item = action.payload;
      const existingItem = state.cartItems.find((data) => data.id === Item.id);
      state.products.map((item) =>
        item.id === Item.id ? (item.isLoading = true) : (item.isLoading = false)
      );
      if (existingItem) {
        existingItem.amount -= 1;
        if (existingItem.amount === 0) {
          state.cartItems = state.cartItems.filter(
            (data) => data.id !== Item.id
          );
        }
      }
    },
    calcTotal: (state) => {
      let total = 0;
      state.cartItems.forEach((data) => {
        total = total + data.amount * data.price;
      });

      state.total = total;
    },
  },
});
export const {
  clearCard,
  removeItem,
  addToCard,
  calcTotal,
  increase,
  dicrease,
} = cartSlice.actions;
export default cartSlice.reducer;
