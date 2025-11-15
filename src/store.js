
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,   // so state.cart.items exists
  },
});

export default store;
