import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { auth, database } from '../../Config/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
// Define the initial state for the slice
const initialState = {
  user: null,
  loading: false,
  error: null,
};
// Async thunk for signup
export const signupUser = createAsyncThunk(
  'auth/signupUser',
  async ({ name, username, email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const userObj = { name, username, email };
      const uID = userCredential.user.uid;
      await setDoc(doc(database, 'users', uID), userObj);
      return { userObj, uid: uID };
    } 
    catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const authSlice = createSlice({
  name: 'signupauth',
  initialState, // Use the defined initialState object
  extraReducers: (builder) => {
    builder.addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      builder.addCase(signupUser.fulfilled, (state, action) => {
        state.user = { ...action.payload.userObj, uid: action.payload.uid };
        state.loading = false;
      })
      builder.addCase(signupUser.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default authSlice.reducer;