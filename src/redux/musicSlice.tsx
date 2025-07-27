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
}

// Define the initial state using that type
const initialState: CounterState = {
  thatMusic: { content: "", photo: "", source: "", soyleyen: "" },
};

export const musicSlice = createSlice({
  name: "counter",

  initialState,
  reducers: {
    toAbout: (state, action) => {
      state.thatMusic = action.payload;
    },
  },
});

export const { toAbout } = musicSlice.actions;

export default musicSlice.reducer;
