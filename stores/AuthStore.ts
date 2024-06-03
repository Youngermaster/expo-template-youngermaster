import create from 'zustand';
import * as SecureStore from 'expo-secure-store';

interface AuthState {
  isAuthenticated: boolean;
  authenticate: () => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  authenticate: async () => {
    await SecureStore.setItemAsync('userToken', 'authenticated');
    set({ isAuthenticated: true });
  },
  logout: async () => {
    await SecureStore.deleteItemAsync('userToken');
    set({ isAuthenticated: false });
  }
}));