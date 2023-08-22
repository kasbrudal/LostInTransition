import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useState } from 'react';

/*const initialState = {
    currentUser: null,
    translations: []
};*/
export const getCurrentUser = createAsyncThunk("username?=kasper",
async()=>{
    const response  = await fetch('https://lost-in-translation-production-9e97.up.railway.app')
    const userData = await response.json()
    return userData
})

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        username: "no name",
        translations: []
    },
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
