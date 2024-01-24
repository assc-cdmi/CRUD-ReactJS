import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userData: {
        "Username": "",
        "Email": "",
        "Name": "",
        "Token": "",
        "ID": ""
    },
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        initializeData: (state, actions) => {
            state.userData = actions.payload;
        },
    },
})

export const { initializeData } = counterSlice.actions

export default counterSlice.reducer