import { createAction } from "@reduxjs/toolkit";
import { FullUpdateMutationData } from "../../components/Cards/Cards.entities";

export const PREFIX = '@forms';

type Fields = Partial<FullUpdateMutationData>;

export enum FormName {
  Card = 'card',
};
export interface UpdateFormPayload {
  name: FormName;
  fields: Fields;
}

export interface UpdateFormAction {
  payload: UpdateFormPayload;
  type: typeof updateForm.type;
}

export const updateForm = createAction(`${PREFIX}/UPDATE`, (name: FormName, fields: Fields) => ({
  payload: { name, fields },
}));
