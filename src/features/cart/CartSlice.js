import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addInCart(state, action) {
      state.cart.push(action.payload);
    },
    removeFromCart(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },

    incQuantity(state, action) {
      const item = state.cart.filter((item) => item.pizzaId === action.payload);
      item.quantity++;
    },
    decQuantity(state, action) {
      const item = state.cart.filter((item) => item.pizzaId === action.payload);
      item.quantity--;
    },
    clearCart(state, action) {
      state.cart = [];
    },
  },
});

export const {
  addInCart,
  removeFromCart,
  incQuantity,
  decQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;

export const getTotalQuantity = (state) =>
  state.cart.cart.reduce((sum, curr) => (sum += curr.quantity), 0);

export const getTotalPrice = (state) =>
  state.cart.cart.reduce((sum, curr) => (sum += curr.totalPrice), 0);
