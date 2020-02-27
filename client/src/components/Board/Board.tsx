import React, { useRef } from 'react';
import { CardField, CardActions, CardsQuery } from '../../entities/card';
import { Column } from './Column';
import uuid from 'uuid';
import { createCard, getCards, omitTemporaryFields } from '../../utils/card';
import { Table } from './Board.styled';
import { Form } from '../shared/Form';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { ADD_CARD } from '../../graphql/mutations/card/add';
import { GET_CARDS } from '../../graphql/query/cards';
import { DELETE_CARD } from '../../graphql/mutations/card/delete';
import { QueryMap } from '../../utils/api';
import { STATES } from './Board.utils';
import { StateHandler } from '../shared/getStateHandler';

interface Props {
  boardId: string;
  liveNotification(message: string): void;
}

const Board: React.FC<Props> = ({ liveNotification, boardId }) => {
  const { loading, error, data } = useQuery<CardsQuery>(GET_CARDS, {
    variables: {
      data: { boardId },
    },
  });

  const [addCardMutation] = useMutation(ADD_CARD);
  const [deleteCardMutation] = useMutation(DELETE_CARD);

  const inputRef = useRef<HTMLInputElement>(null);

  const cards = data?.cards ?? [];

  const addCard = () => {
    const value = inputRef.current?.value ?? null;

    if (value) {
      const card = createCard(value, uuid(), boardId);

      addCardMutation({
        variables: {
          data: omitTemporaryFields(card, [CardField.id])
        },

        refetchQueries: [QueryMap.Cards],
      });

      inputRef.current!.value = '';
    }
  };

  const showNotificationAfterDelete = (message?: Error) => {
    liveNotification((message?.message || 'Card was deleted'));
  };

  const deleteCard = (id: string) => {
    deleteCardMutation({
      variables: {
        id: { id },
      },

      refetchQueries: [QueryMap.Cards],
    }).then(_ => showNotificationAfterDelete()).catch(showNotificationAfterDelete);
  };

  const getCardsByState = getCards(cards);
  const actions: CardActions = { deleteCard };

  if (error || loading) {
    return <StateHandler loading={loading} error={error} />;
  }

  return (
    <>
      <Form>
        <TextField inputRef={inputRef} label="Enter a card title" />

        <Button onClick={addCard} variant="contained" color="primary">
          Add
        </Button>
      </Form>

      <Table>
        {STATES.map(state => (
          <Column
            key={state}
            title={state}
            items={getCardsByState(state)}
            actions={actions}
          />
        ))}
      </Table>
    </>
  )
};

export default Board;
