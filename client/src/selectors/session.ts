import { RootState } from "../redux/configureStore";

export const selectSession = (state: RootState) => state.session;
