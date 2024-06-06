import Vehicle from "~/models/Vehicle";

interface LoginResponse {
  vehicles: Vehicle[];
}

const getVehicles = async (): Promise<LoginResponse> => {
  try {
    // ! Later on we will replace this with a real network request
    // Simulate network request delay and response
    await new Promise((resolve) => setTimeout(resolve, 500));
    return {
      vehicles: [
        {
          id: "car-1",
          plate: "ABC-1234",
          assignedDrivers: ["driver-1"],
        },
        {
          id: "car-2",
          plate: "DEF-5678",
          assignedDrivers: ["driver-2"],
        },
      ],
    };
  } catch (err) {
    console.error(err);
    throw new Error("Failed to login");
  }
};

export default getVehicles;
