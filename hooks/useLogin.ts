import { useEffect, useState } from "react";
import Driver from "~/models/Driver";

interface LoginResponse {
  token: string;
  driver: Driver;
}

const useLogin = (username: string, password: string) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<LoginResponse | null>(null);

  const login = async () => {
    setLoading(true);
    try {
      // Simulate network request delay and response
      await new Promise((resolve) => setTimeout(resolve, 500));
      // Simulate successful login
      setData({
        token: "fake-bearer-token",
        driver: {
          name: "John Doe",
          email: "john@example.com",
          assignedCars: ["car-1", "car-2"],
          assignedRoutes: ["route-1", "route-2"],
          password: "password",
        },
      });
    } catch (err) {
      setError("Failed to login");
    }
    setLoading(false);
  };

  useEffect(() => {
    if (username && password) {
      login();
    }
  }, [username, password]);

  return { loading, error, data };
};

export default useLogin;
