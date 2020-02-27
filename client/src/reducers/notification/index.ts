import { createReducer } from "@reduxjs/toolkit";
import { liveNotification, removeNotification, NotificationAction } from "../../actions/notification";

interface NotificationState {
  text: string | null;
}

const initialState: NotificationState = {
  text: null,
};

export const notificationReducer = createReducer(initialState, {
  [liveNotification.type]: (_state, action: NotificationAction) => ({
    text: action.payload.text,
  }),

  [removeNotification.type]: () => ({
    text: null,
  }),
});