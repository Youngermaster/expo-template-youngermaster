import { create } from "zustand";
import Vehicle from "~/models/Vehicle";

interface VehicleState {
  vehicles: Vehicle[];
  selectedVehicle: Vehicle | null;
  setVehicles: (vehicles: Vehicle[]) => void;
  setSelectedVehicle: (vehicle: Vehicle | null) => void;
}

const useVehicleStore = create<VehicleState>((set) => ({
  vehicles: [],
  selectedVehicle: null,
  setVehicles: (vehicles) => set({ vehicles }),
  setSelectedVehicle: (vehicle) => set({ selectedVehicle: vehicle }),
}));

export default useVehicleStore;
