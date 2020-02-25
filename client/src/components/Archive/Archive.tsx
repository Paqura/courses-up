import React from 'react';
import { useQuery, useMutation } from 'react-apollo';
import { GET_ARCHIVE_CARDS } from './graphql/query/getArchive';
import { CardsQuery, CardState } from '../Cards/Cards.entities';
import { queryOptions } from './Archive.utils';
import { ArchiveCard } from './ArchiveCard';
import { StateHandler } from '../shared/getStateHandler';
import { UPDATE_CARD } from '../Cards/graphql/mutations/updateCard';
import { QueryMap } from '../../utils/api';

const Archive = () => {
  const { loading, error, data } = useQuery<CardsQuery>(GET_ARCHIVE_CARDS, queryOptions);

  const [updateCardMutation] = useMutation(UPDATE_CARD);

  if (error || loading) {
    return <StateHandler loading={loading} error={error} />;
  }

  const moveCardToBoard = (boardId: string, cardId: string) => {
    updateCardMutation({
      variables: {
        data: {
          boardId,
          state: CardState.Open,
        },

        id: { id: cardId }
      },

      refetchQueries: [QueryMap.Cards],
    });
  };

  return (
    <ul>
      {data && data.cards.map(card => (
        <ArchiveCard key={card.id} card={card} move={moveCardToBoard} />
      ))}

    </ul>
  )
};

export default Archive;
