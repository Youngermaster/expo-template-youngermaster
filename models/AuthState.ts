import Driver from "~/models/Driver";

interface AuthState {
  isAuthenticated: boolean;
  driver: Driver | null;
  authenticate: (username: string, password: string) => void;
  logout: () => void;
}

export default AuthState;
