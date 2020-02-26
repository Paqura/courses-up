import { createReducer } from "@reduxjs/toolkit";
import { updateForm, UpdateFormAction } from "../../actions/forms";
import { FullUpdateMutationData } from "../../components/Cards/Cards.entities";

interface UpdateFormState {
  [key: string]: Partial<FullUpdateMutationData>;
}

const initialState = {} as UpdateFormState;

export const formReducer = createReducer(initialState, {
  [updateForm.type]: (state, action: UpdateFormAction) => ({
    ...state,

    [action.payload.name]: {
      ...state[action.payload.name],
      ...action.payload.fields,
    },
  }),
});