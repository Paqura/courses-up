import { Card, CardState, Priority } from '../entities/card';

export const createCard = (value: string, id: string, boardId: string): Card => ({
  id,
  title: value,
  description: '',
  state: CardState.Open,
  boardId,
  priority: Priority.Low,
});

export const getCards = (cards: Card[]) => (state: CardState) =>
  cards.filter(card => card.state === state);

export const omitTemporaryFields = (card: Card, fields: (keyof Card)[]): Partial<Card> => {
  const clone = { ...card };

  for (const field of fields)  {
    delete clone[field];
  }

  return clone;
};