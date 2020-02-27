export enum CardState {
  Archive = 'Archive',
  Done = 'Done',
  Open = 'Open',
  Progress = 'Progress',
}

export enum Priority {
  Epic = 'Epic',
  Low = 'Low',
  High = 'High',
}

export enum CardField {
  boardId = 'boardId',
  id ='id',
  title = 'title',
  description = 'description',
  state = 'state',
  priority = 'priority',
}

export interface Card {
  [CardField.id]: string;
  [CardField.title]: string;
  [CardField.description]: string;
  [CardField.state]: CardState;
  [CardField.boardId]: string;
  [CardField.priority]: Priority;
}

export interface CardActions {
  deleteCard(id: string): void;
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
