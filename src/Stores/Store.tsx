import { configureStore } from '@reduxjs/toolkit'
import { reducer } from '../Reducers/Reducer'



export const Store = configureStore({ reducer: reducer })