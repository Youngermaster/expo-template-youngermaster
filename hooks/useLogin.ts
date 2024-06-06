import { useEffect, useState } from "react";

interface LoginResponse {
  token: string;
  user: {
    name: string;
    email: string;
  };
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
        user: {
          name: "John Doe",
          email: "john@example.com",
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
