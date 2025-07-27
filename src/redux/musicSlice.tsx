import { createSlice } from "@reduxjs/toolkit";

interface thatMusicType {
  content: string;
  photo: string;
  source: string;
  soyleyen: string;
}

// Define a type for the slice state
export interface CounterState {
  thatMusic: thatMusicType;
  playingMusic: string;
}

// Define the initial state using that type
const initialState: CounterState = {
  thatMusic: { content: "", photo: "", source: "", soyleyen: "" },
  playingMusic: "",
};

export const musicSlice = createSlice({
  name: "counter",

  initialState,
  reducers: {
    toAbout: (state, action) => {
      state.thatMusic = action.payload;
    },
    setPlayingMusic: (state, action) => {
      state.playingMusic = action.payload;
    },
  },
});

export const { toAbout, setPlayingMusic } = musicSlice.actions;

export default musicSlice.reducer;
