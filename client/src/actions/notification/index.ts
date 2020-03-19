import { createAction } from '@reduxjs/toolkit';

export interface NotificationPayload {
  text: string | null;
}

export interface NotificationAction {
  payload: NotificationPayload;
  type: typeof liveNotification.type;
}

export const PREFIX = '@notification';

export const liveNotification = createAction(`${PREFIX}/LIVE`, (text: string) => ({
  payload: { text },
}));

export const removeNotification = createAction(`${PREFIX}/REMOVE`);
