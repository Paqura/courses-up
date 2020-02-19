import { Card, CardState } from "../components/Cards/Cards.entities";

export const createCard = (value: string, id: string, boardId: string): Card => ({
  id,
  title: value,
  description: '',
  state: CardState.Open,
  boardId,
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