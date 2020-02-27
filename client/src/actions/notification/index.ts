import { createAction } from '@reduxjs/toolkit';

export interface NotificationPayload {
  text: string | null;
}

export interface NotificationAction {
  type: typeof liveNotification.type;
  payload: NotificationPayload;
}

export const PREFIX = '@notification';

export const liveNotification = createAction(`${PREFIX}/LIVE`, (text: string) => ({
  payload: { text },
}));

export const removeNotification = createAction(`${PREFIX}/REMOVE`);
