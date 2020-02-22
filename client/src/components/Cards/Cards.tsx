import React, { useRef } from 'react';
import { CardField, FullUpdateMutationData, CardActions, CardsQuery } from './Cards.entities';
import { List } from './List';
import uuid from 'uuid';
import { createCard, getCards, omitTemporaryFields } from '../../utils/card';
import { Table } from './Cards.styled';
import { Form } from '../shared/Form';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { useMutation, useQuery } from '@apollo/react-hooks';
import { ADD_CARD } from './graphql/mutations/addCard';
import { GET_CARDS } from './graphql/query/cards';
import { DELETE_CARD } from './graphql/mutations/deleteCard';
import { UPDATE_CARD } from './graphql/mutations/updateCard';
import { QueryMap } from '../../utils/api';
import { STATES } from './Cards.utils';
import { StateHandler } from '../shared/getStateHandler';

interface Props {
  boardId: string;
  liveNotification(message: string): void;
}

const Cards: React.FC<Props> = ({ liveNotification, boardId }) => {
  const { loading, error, data } = useQuery<CardsQuery>(GET_CARDS, {
    variables: {
      data: { boardId },
    },
  });

  const [addCardMutation] = useMutation(ADD_CARD);
  const [deleteCardMutation] = useMutation(DELETE_CARD);
  const [updateCardMutation] = useMutation(UPDATE_CARD);

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
    }).then(showNotificationAfterDelete).catch(showNotificationAfterDelete);
  };

  const updateCard = (id: string, updatedData: Partial<FullUpdateMutationData>) => {
    const card = cards.find(card => card.id === id);

    if (!card) {
      return;
    }

    const { id: ID, __typename, ...rest } = card;

    const data = {
      ...rest,
      ...updatedData,
    };

    updateCardMutation({
      variables: {
        id: { id },
        data,
      },

      optimisticResponse: {
        __typename: "UpdateCard",

        updateCard: {
          id: { id },
          title: data.title,
          description: data.description,
          state: data.state,
          __typename
        }
      }
    });
  };

  const getCardsByState = getCards(cards);
  const actions: CardActions = { updateCard, deleteCard };

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
          <List
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

export default Cards;
