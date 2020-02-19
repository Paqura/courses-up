import React from 'react';
import { useQuery } from 'react-apollo';
import { GET_ARCHIVE_CARDS } from './graphql/query/getArchive';
import { CardState, CardsQuery } from '../Cards/Cards.entities';

const Archive = () => {
  const { loading, error, data } = useQuery<CardsQuery>(GET_ARCHIVE_CARDS, {
    variables: {
      data: {
        state: CardState.Archive,
      },
    },

    fetchPolicy: 'no-cache',
  });

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error</div>
  }

  const { cards } = data!;

  return (
    <ul>
      {cards.map(card => (
        <li key={card.id}>
          {card.title}
          <p>
            {card.description}
          </p>
        </li>
      ))}
    </ul>
  )
};

export default Archive;
