import { createReducer } from "@reduxjs/toolkit";
import { updateForm } from "../../actions/forms";

const initialState = {};

export const formReducer = createReducer(initialState, {
  [updateForm.type]: (state, action) => ({
    ...state,
    [action.payload.name]: {
      // @ts-ignore
      ...state[action.payload.name],
      ...action.payload.fields,
    },
  }),
});