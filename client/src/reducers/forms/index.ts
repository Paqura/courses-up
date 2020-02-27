import { createReducer } from '@reduxjs/toolkit';
import { updateForm, UpdateFormAction, FormName } from '../../actions/forms';
import { FullUpdateMutationData } from '../../entities/card';

type UpdateFormState = {
  [key in FormName]: Partial<FullUpdateMutationData>;
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