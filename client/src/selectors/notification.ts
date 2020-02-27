import { RootState } from "../redux/configureStore";

export const getNotification = (state: RootState) => state.notification;
export const getNotificationText = (state: RootState) => getNotification(state).text;