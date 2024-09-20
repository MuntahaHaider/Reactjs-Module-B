import { configureStore } from '@reduxjs/toolkit';
import signupauthReducer from './slices/signupAuthSlice';
import loginauthReducer from './slices/loginAuthSlice';

 const store = configureStore({
  reducer: {
    signupauth: signupauthReducer,
    loginauth: loginauthReducer,

  },
});

export  default store;
