export interface IUser {
  // userId?: string;      // not necessary, since this can be identified in the backend, using the token anyway?
  username: string | null;
  token: string | null; // access token
  refreshToken: string | null; // refresh token
  isLoading: boolean;
}
