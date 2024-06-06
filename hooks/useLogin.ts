import Driver from "~/models/Driver";

interface LoginResponse {
  token: string;
  driver: Driver;
}

const login = async (
  username: string,
  password: string
): Promise<LoginResponse> => {
  try {
    // ! Later on we will replace this with a real network request
    // ! and use a real authentication system passing the username and password.
    // Simulate network request delay and response
    await new Promise((resolve) => setTimeout(resolve, 500));
    return {
      token: "fake-bearer-token",
      driver: {
        name: "John Doe",
        email: "john@example.com",
        assignedCars: ["car-1", "car-2"],
        assignedRoutes: ["route-1", "route-2"],
        password: "password", // As noted before, storing passwords like this is not recommended.
      },
    };
  } catch (err) {
    console.error(err);
    throw new Error("Failed to login");
  }
};

export default login;
