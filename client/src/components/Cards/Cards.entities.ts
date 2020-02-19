export enum CardState {
  Archive = 'Archive',
  Done = 'Done',
  Open = 'Open',
  Progress = 'Progress',
}

export enum CardField {
  boardId = 'boardId',
  id ='id',
  title = 'title',
  description = 'description',
  state = 'state',
}

export interface Card {
  [CardField.id]: string;
  [CardField.title]: string;
  [CardField.description]: string;
  [CardField.state]: CardState;
  [CardField.boardId]: string;
}

export interface CardActions {
  deleteCard(id: string): void;
  updateCard(id: string, updatedData: Partial<FullUpdateMutationData>): void;
}

export type QueryCard = Card & { __typename: string };

export interface CardsQuery {
  cards: QueryCard[];
}

export interface FullUpdateMutationData {
  [CardField.description]: string;
  [CardField.id]: string;
  [CardField.state]: CardState;
  [CardField.title]: string;
  [CardField.boardId]: string;
}
