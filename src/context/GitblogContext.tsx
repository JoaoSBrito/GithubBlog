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

interface issueData {
  title: string;
  labels: string[];
  created_at: string;
  body: string;
}

interface GitblogContextType {
  data: userData;
  issueData: issueData[];
}

export const GitblogContext = createContext({} as GitblogContextType);

export function GitblogProvider({ children }: GitblogProviderProps) {
  const [data, setData] = useState<userData>({} as userData);
  const [issueData, setIssueData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await api.get("/users/JoaoSBrito");
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(data);

  const fetchIssueData = async () => {
    try {
      const resp = await api.get("/repos/JoaoSBrito/githubblog/issues");
      setIssueData(resp.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
    fetchIssueData();
  }, []);

  return (
    <GitblogContext.Provider value={{ data, issueData }}>
      {children}
    </GitblogContext.Provider>
  );
}
