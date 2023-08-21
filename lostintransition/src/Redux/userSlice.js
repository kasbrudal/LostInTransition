import { createSlice } from '@reduxjs/toolkit';
import { useState } from 'react';

const initialState = {
    currentUser: null,
    translations: []
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => { 
            state.currentUser = action.payload;
        //clearUser: () => null
    },
    addTranslation: (state, action) => {
        state.translations.put(action.payload);
      }
}
});

export const { setUser, addTranslation, clearUser } = userSlice.actions;
export const selectUser = state => state.user;
export default userSlice.reducer;
