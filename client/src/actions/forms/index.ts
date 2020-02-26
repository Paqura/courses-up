import { createAction } from "@reduxjs/toolkit";
import { FullUpdateMutationData } from "../../components/Cards/Cards.entities";

export const PREFIX = '@forms';

type Fields = Partial<FullUpdateMutationData>;

export interface UpdateFormPayload {
  name: string;
  fields: Partial<FullUpdateMutationData>;
}

export interface UpdateFormAction {
  payload: UpdateFormPayload;
  type: typeof updateForm.type;
}

export const updateForm = createAction(`${PREFIX}/UPDATE`, (name: string, fields: Fields) => ({
  payload: { name, fields },
}));

export type FormAction = UpdateFormAction;