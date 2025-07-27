import { createSlice } from "@reduxjs/toolkit";

interface thatMusicType {
  content: string;
  photo: string;
  source: string;
  soyleyen: string;
}

export interface CounterState {
  thatMusic: thatMusicType;
  changedTitle: boolean;
}

const initialState: CounterState = {
  thatMusic: { content: "", photo: "", source: "", soyleyen: "" },
  changedTitle: false,
};

export const musicSlice = createSlice({
  name: "counter",

  initialState,
  reducers: {
    toAbout: (state, action) => {
      state.thatMusic = action.payload;
    },
    setChangedTitle: (state, action) => {
      state.changedTitle = action.payload;
    },
  },
});

export const { toAbout, setChangedTitle } = musicSlice.actions;

export default musicSlice.reducer;
