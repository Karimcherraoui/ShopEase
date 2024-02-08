import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  achats: [],
};

const AchatSlice = createSlice({
  name: "achats",
  initialState,
  reducers: {
	addAchat(state, action) {
	  state.achats.push(action.payload);
	},
  },
});

export const { addAchat } = AchatSlice.actions;

export default AchatSlice.reducer;