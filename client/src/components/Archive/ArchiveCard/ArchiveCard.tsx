import React from 'react'
import { Card } from '../../Cards/Cards.entities';

interface Props {
  card: Card;
}

const ArchiveCard: React.FC<Props> = ({ card }) => (
  <li key={card.id}>
    <h5>{card.title}</h5>

    <p>
      {card.description || 'No description'}
    </p>
  </li>
);

export default ArchiveCard;
