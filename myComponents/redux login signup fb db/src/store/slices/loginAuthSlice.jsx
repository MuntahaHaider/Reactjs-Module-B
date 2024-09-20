import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, database } from '../../Config/firebase';
import { doc, getDoc } from 'firebase/firestore';

const initialState = {
    user: null,
    loading: false,
    error: null,
  };

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const userId = userCredential.user.uid;
      localStorage.setItem('UserID', userId);

      const userDoc = await getDoc(doc(database, 'users', userId));
      return userDoc.data(); // Return user data after successful login
    } catch (error) {
      return rejectWithValue(error.message); // Handle error
    }
  }
);

const authSlice = createSlice({
  name: 'loginauth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
