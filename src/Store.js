import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './store/LoginData'

export const store = configureStore({
    reducer: {
        counter: counterSlice,
    },
})

