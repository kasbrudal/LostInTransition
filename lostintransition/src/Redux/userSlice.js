import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getCurrentUser = createAsyncThunk(
  'user/getCurrentUser',
  async () => {
    const response = await fetch('https://lost-in-translation-production-9e97.up.railway.app');
    const userData = await response.json();
    return userData;
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: "no name",
    translations: []
  },
  reducers: {
    setUser: (state, action) => {
      state.username = action.payload.username;
    },
    addTranslation: (state, action) => {
      state.translations.push(action.payload);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.username = action.payload.username;
        state.translations = action.payload.translations;
      });
  }
});

export const { setUser, addTranslation, clearUser } = userSlice.actions;
export const selectUser = state => state.user;

export default userSlice.reducer;
