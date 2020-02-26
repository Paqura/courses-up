import React, { ChangeEvent } from 'react';
import { EditorTitle, useStyles } from './Edit.styled';
import { FormControl, TextField, InputLabel, Select, MenuItem } from '@material-ui/core';
import { useQuery } from 'react-apollo';
import { GET_CARD } from '../graphql/query/card';
import { Card, CardState, Priority, CardField } from '../Cards.entities';
import { StateHandler } from '../../shared/getStateHandler';
import { connect } from 'react-redux';
import { updateForm } from '../../../actions/forms';

interface Props {
  cardId: string;
  updateForm(name: string, fields: any): void;
}

export interface CardQuery {
  card: Card;
}

export const STATES = [CardState.Archive, CardState.Done, CardState.Open, CardState.Progress];
export const PRIORITIES = [Priority.Low, Priority.High, Priority.Epic];

export type FormField = keyof typeof CardField;

export interface ChangeParams {
  name?: string | FormField;
  value?: unknown;
}

const Edit: React.FC<Props> = ({ cardId, updateForm }) => {
  const classes = useStyles();

  const { loading, error, data } = useQuery<CardQuery>(GET_CARD, {
    variables: {
      id: { id: cardId },
    },
  });

  const card = data?.card;

  if (loading || error) {
    return <StateHandler loading={loading} error={error} />;
  }

  const createDropdown = (items: (CardState | Priority)[]): React.ReactNode[] =>
    items.map(item => <MenuItem key={item} value={item}>{item}</MenuItem>);

  const formChange = (evt: ChangeEvent<ChangeParams>) => {
    const { name, value } = evt.target;

    if (!name || !value) {
      return;
    }

    updateForm('card', {
      [name]: value,
    });
  };

  if (!card) {
    return null;
  }

  return (
    <>
      <header>
        <EditorTitle>Edit card</EditorTitle>
      </header>

      <FormControl className={classes.control}>
        <TextField
          id="standard-basic"
          label="Title"
          defaultValue={card.title}
          onChange={formChange}
          name={CardField.title}
        />
      </FormControl>

      <FormControl className={classes.control}>
        <TextField
          id="standard-description"
          label="Description"
          defaultValue={card.description}
          onChange={formChange}
          name={CardField.description}
        />
      </FormControl>

      <FormControl className={classes.control}>
        <InputLabel id="state">State</InputLabel>

        <Select
          labelId="state"
          defaultValue={card.state}
          onChange={formChange}
          name={CardField.state}
        >
          {createDropdown(STATES)}
        </Select>
      </FormControl>

      <FormControl className={classes.control}>
        <InputLabel id="priority">Priority</InputLabel>

        <Select
          labelId="priority"
          id="priority"
          defaultValue={card.priority}
          onChange={formChange}
          name={CardField.priority}
        >
          {createDropdown(PRIORITIES)}
        </Select>
      </FormControl>
    </>
  )
};

export default connect(null, { updateForm })(Edit);
