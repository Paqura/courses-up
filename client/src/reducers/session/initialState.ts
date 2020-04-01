
export interface SessionUser {
  name: string;
  token: string;
}

export interface Session {
  error: null | string;
  hasRegister: boolean;
  isLoading: boolean;
  isLoggedIn: boolean;
  user: null | SessionUser;
}

export const initialState: Session = {
  error: null,
  hasRegister: false,
  isLoading: false,
  isLoggedIn: false,
  user: null,
};