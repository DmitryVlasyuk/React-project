import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCharacter, getCharacters } from "../../api/character.api";

export const getAll = createAsyncThunk(
  "characters/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getCharacters();
      console.log(response)
      return response.slice(0, 20);
    } catch (e: any) {
      return rejectWithValue("Loading failed.");
    }
  }
);

export const getSelected = createAsyncThunk(
  "characters/getSelected",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await getCharacter(id);
      return response;
    } catch (e: any) {
      return rejectWithValue("Loading failed.");
    }
  }
);