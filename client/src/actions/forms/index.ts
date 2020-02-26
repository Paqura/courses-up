import { createAction } from "@reduxjs/toolkit";

export const PREFIX = '@forms';

export const updateForm = createAction(`${PREFIX}/UPDATE`, (name: string, fields: {}) => ({
  payload: { name, fields },
}));
