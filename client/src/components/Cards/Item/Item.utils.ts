import { CardState } from "../Cards.entities";

export const getStatusColor = (status: CardState): string => ({
  [CardState.Open]: '#c8c8c8',
  [CardState.Progress]: 'blue',
  [CardState.Done]: 'green',
  [CardState.Archive]: 'red',
})[status];