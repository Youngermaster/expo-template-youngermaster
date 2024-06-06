import { create } from "zustand";
import * as SecureStore from "expo-secure-store";
import AuthState from "~/models/AuthState";
import login from "~/hooks/useLogin";
import useDriverStore from "~/stores/DriverStore";

export const useAuthStore = create<AuthState>((set) => {
  const { setDriver } = useDriverStore.getState();

  return {
    isAuthenticated: false,
    driver: null,
    authenticate: async (username: string, password: string) => {
      try {
        const data = await login(username, password);
        await SecureStore.setItemAsync("userToken", data.token);
        setDriver(data.driver); // Set driver information in DriverStore
        set({ isAuthenticated: true, driver: data.driver });
      } catch (error) {
        console.error("Authentication failed:", error);
      }
    },
    logout: async () => {
      await SecureStore.deleteItemAsync("userToken");
      setDriver(null); // Clear driver information in DriverStore
      set({ isAuthenticated: false, driver: null });
    },
  };
});
