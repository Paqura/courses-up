export interface Board {
  id: string;
  uid: string;
  name: string;
}

export interface BoardsQuery {
  boards: Board[];
}