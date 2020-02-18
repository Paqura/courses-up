import { createAction } from "@reduxjs/toolkit";

export const PREFIX = '@notification';

export const liveNotification = createAction(`${PREFIX}/LIVE`, (text: string) => ({
  payload: { text },
}));

export const removeNotification = createAction(`${PREFIX}/REMOVE`);
