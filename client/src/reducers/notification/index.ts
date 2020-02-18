import { createReducer } from "@reduxjs/toolkit";
import { liveNotification, removeNotification } from "../../actions/notification";

const initialState = {
  text: null,
};

export const notificationReducer = createReducer(initialState, {
  [liveNotification.type]: (state, action) => ({
    text: action.payload.text,
  }),
  [removeNotification.type]: (state, action) => ({
    text: null,
  }),
});