import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const authSlice = createSlice({
    name: "auth",
    initialState: {
        authHeader: 'Basic ' + btoa('anveshch' + ':' + 'pass'),
        isAuthenticated: true
    },
    reducers: {
        loginBasicAuth: (state, action) => {
            state.authHeader = 'Basic ' + btoa(action.payload.username + ':' + action.payload.password);
            state.isAuthenticated = true;
        },

        logout: (state) => {
            state.authHeader = null;
            state.isAuthenticated = false;
        },
    },
});

export const { loginBasicAuth, logout } = authSlice.actions;
export default authSlice.reducer;

