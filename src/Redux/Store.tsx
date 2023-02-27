import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "../Redux/Contacts/contact.slice";
import charactersReducer from "../Redux/Characters/Characters.slice";
export const Store = configureStore({
  reducer: {
    contact: contactReducer,
    characters: charactersReducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
