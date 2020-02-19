export interface Board {
  uid: string;
  name: string;
}

export interface BoardsQuery {
  boards: Board[];
}