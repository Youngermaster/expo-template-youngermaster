import { create } from "zustand";
import Driver from "~/models/Driver";

type DriverStore = {
  driver: Driver | null;
  setDriver: (driver: Driver | null) => void;
};

const useDriverStore = create<DriverStore>((set) => ({
  driver: null,
  setDriver: (driver) => set(() => ({ driver })),
}));

export default useDriverStore;
