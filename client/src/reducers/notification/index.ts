import { createReducer } from "@reduxjs/toolkit";
import { liveNotification, removeNotification } from "../../actions/notification";

interface NotificationPayload {
  text: string | null;
}

export interface NotificationAction {
  type: typeof liveNotification.type;
  payload: NotificationPayload;
}

const initialState: NotificationPayload = {
  text: null,
};

export const notificationReducer = createReducer(initialState, {
  [liveNotification.type]: (state, action: NotificationAction) => ({
    text: action.payload.text,
  }),
  [removeNotification.type]: (state, action: NotificationAction) => ({
    text: null,
  }),
});