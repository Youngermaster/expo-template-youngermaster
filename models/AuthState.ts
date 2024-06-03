interface AuthState {
  isAuthenticated: boolean;
  authenticate: () => void;
  logout: () => void;
}

export default AuthState;
