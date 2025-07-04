"use client";

import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export type User = {
  userId: string | null;
};

export type AuthContextType = {
  user: User;
  tokenChecker: (token: string) => Promise<void>;
};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const [user, setUser] = useState<User>({ userId: null });

  const tokenChecker = async (token: string) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/verify",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUser(response.data.userId);
      return;
    } catch (err: any) {
      // router.push("/login");
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      tokenChecker(token);
    } else {
      // router.push("/login");
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, tokenChecker }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext<AuthContextType>(AuthContext);
