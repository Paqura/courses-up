import { createReducer } from '@reduxjs/toolkit';
import { updateForm, UpdateFormAction, FormName } from '../../actions/forms';
import { FullUpdateMutationData } from '../../entities/card';

type UpdateFormState = {
  [key in FormName]: Partial<FullUpdateMutationData>;
}

const initialState = {} as UpdateFormState;

export const formReducer = createReducer(initialState, {
  [updateForm.type]: (state, { payload }: UpdateFormAction) => {
    const { name, fields } = payload;

    return {
      ...state,

      [name]: {
        ...state[name],
        ...fields,
      },
    };
  },
});