import React from 'react';
import { EditorTitle, useStyles } from './Edit.styled';
import { FormControl, TextField, InputLabel, Select, MenuItem } from '@material-ui/core';
import { useQuery } from 'react-apollo';
import { GET_CARD } from '../graphql/query/card';
import { StateHandler } from '../../shared/getStateHandler';
import { Card, CardState, Priority } from '../Cards.entities';

interface Props {
  cardId: string;
}

interface CardQuery {
  card: Card;
}

const Edit: React.FC<Props> = ({ cardId }) => {
  const classes = useStyles();

  const { loading, error, data } = useQuery<CardQuery>(GET_CARD, {
    variables: {
      id: { id: cardId },
    },
  });

  if (loading || error) {
    return <StateHandler loading={loading} error={error} />;
  }

  const card = data?.card;

  if (!card) {
    return null;
  }

  console.log(card)

  return (
    <>
      <header>
        <EditorTitle>Edit card</EditorTitle>
      </header>

      <FormControl className={classes.control}>
        <TextField id="standard-basic" label="Title" defaultValue={card.title} />
      </FormControl>

      <FormControl className={classes.control}>
        <TextField id="standard-description" label="Description" defaultValue={card.description} />
      </FormControl>

      <FormControl className={classes.control}>
        <InputLabel id="state">State</InputLabel>

        <Select
          labelId="state"
          id="state"
          value={card.state}
          onChange={() => { }}
        >
          {[CardState.Archive, CardState.Done, CardState.Open, CardState.Progress]
            .filter(state => state !== card.state)
            .map(state => (
              <MenuItem key={state} value={state}>{state}</MenuItem>
            ))}
        </Select>
      </FormControl>

      <FormControl className={classes.control}>
        <InputLabel id="priority">Priority</InputLabel>

        <Select
          labelId="priority"
          id="priority"
          defaultValue={card.priority}
          onChange={() => { }}
        >
          {[Priority.Low, Priority.High, Priority.Epic]
            .filter(priority => priority !== card.priority)
            .map(priority => (
              <MenuItem key={priority} value={priority}>{priority}</MenuItem>
            ))}
        </Select>
      </FormControl>
    </>
  )
};

export default Edit;
