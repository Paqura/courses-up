import React from 'react';
import { useQuery } from 'react-apollo';
import { GET_ARCHIVE_CARDS } from './graphql/query/getArchive';
import { CardsQuery } from '../Cards/Cards.entities';
import { queryOptions } from './Archive.utils';
import { ArchiveCard } from './ArchiveCard';
import { StateHandler } from '../shared/getStateHandler';

const Archive = () => {
  const { loading, error, data } = useQuery<CardsQuery>(GET_ARCHIVE_CARDS, queryOptions);

  if (error || loading) {
    return <StateHandler loading={loading} error={error} />;
  }

  return (
    <ul>
      {data && data.cards.map(card => (
        <ArchiveCard key={card.id} card={card} />
      ))}

    </ul>
  )
};

export default Archive;
