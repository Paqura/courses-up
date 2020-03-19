import { RootState } from "../redux/configureStore";
import { FormName } from "../actions/forms";

export const getForms = (state: RootState) => state.forms;
export const getFormsByName = (state: RootState, formName: FormName) => getForms(state)[formName];
