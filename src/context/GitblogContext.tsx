import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface GitblogProviderProps {
  children?: ReactNode;
}

interface userData {
  name: string;
  login: string;
  followers: number;
  avatar_url: string;
  company?: string;
  bio?: string;
}

interface GitblogContextType {
  data: userData;
}

export const GitblogContext = createContext({} as GitblogContextType);

export function GitblogProvider({ children }: GitblogProviderProps) {
  const [data, setData] = useState<userData>({} as userData);

  const fetchData = async () => {
    try {
      const response = await api.get("/users/JoaoSBrito");
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(data);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <GitblogContext.Provider value={{ data }}>
      {children}
    </GitblogContext.Provider>
  );
}
