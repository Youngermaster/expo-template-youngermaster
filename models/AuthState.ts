interface User {
  name: string;
  email: string;
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  authenticate: (username: string, password: string) => void;
  logout: () => void;
}

export default AuthState;
