export interface IUser {
  // userId?: string;      // not necessary, since this can be identified in the backend, using the token anyway?
  username: string | null;
  token: string | null;
  isLoading: boolean;
}
