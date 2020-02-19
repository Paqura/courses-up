import React from 'react'
import { Card } from '../../Cards/Cards.entities';

interface Props {
  card: Card;
}

const ArchiveCard: React.FC<Props> = ({ card }) => (
  <li key={card.id}>
    {card.title}
    <p>
      {card.description}
    </p>
  </li>
);

export default ArchiveCard;
