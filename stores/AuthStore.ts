import { create } from "zustand";
import * as SecureStore from "expo-secure-store";
import AuthState from "~/models/AuthState";

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  authenticate: async () => {
    await SecureStore.setItemAsync("userToken", "authenticated");
    set({ isAuthenticated: true });
  },
  logout: async () => {
    await SecureStore.deleteItemAsync("userToken");
    set({ isAuthenticated: false });
  },
}));
