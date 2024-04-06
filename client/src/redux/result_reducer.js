import { createSlice } from "@reduxjs/toolkit";

export const resultReducer = createSlice({
  name: "result",
  initialState: {
    userId: null,
    result: [],
    minute: 0,
    second: 0
  },
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    pushResultAction: (state, action) => {
      state.result.push(action.payload);
    },
    updateResultAction: (state, action) => {
      const { trace, checked } = action.payload;
      state.result.fill(checked, trace, trace + 1);
    },
    resetResultAction: () => {
      return {
        userId: null,
        result: [],
        minute: 0,
        second: 0
      };
    },
    updateTimer: (state, action) => {
      state.minute = action.payload.minutes;
      state.second = action.payload.seconds;
    }
  }
});

export const {
  setUserId,
  pushResultAction,
  resetResultAction,
  updateResultAction,
  updateTimer
} = resultReducer.actions;

export default resultReducer.reducer;
