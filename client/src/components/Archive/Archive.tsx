import React from 'react';
import { useQuery } from 'react-apollo';
import { GET_ARCHIVE_CARDS } from './graphql/query/getArchive';
import { CardsQuery } from '../Cards/Cards.entities';
import { queryOptions } from './Archive.utils';

const Archive = () => {
  const { loading, error, data } = useQuery<CardsQuery>(GET_ARCHIVE_CARDS, queryOptions);

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error</div>
  }

  return (
    <ul>
      {data && data.cards.map(card => (
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
