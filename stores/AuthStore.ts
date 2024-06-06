import { create } from "zustand";
import * as SecureStore from "expo-secure-store";
import AuthState from "~/models/AuthState";
import useLogin from "~/hooks/useLogin";

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  driver: null,
  authenticate: async (username: string, password: string) => {
    const { data } = useLogin(username, password);
    if (data) {
      await SecureStore.setItemAsync("userToken", data.token);
      set({ isAuthenticated: true, driver: data.driver });
    }
  },
  logout: async () => {
    await SecureStore.deleteItemAsync("userToken");
    set({ isAuthenticated: false, driver: null });
  },
}));
