import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
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
  created_at: string;
  body: string;
  number: number;
  html_url: string;
  comments: number;
}

interface GitblogContextType {
  data: userData;
  issueData: issueData[];
  getPosts: () => void;
}

export const GitblogContext = createContext({} as GitblogContextType);

export function GitblogProvider({ children }: GitblogProviderProps) {
  const [data, setData] = useState<userData>({} as userData);
  const [issueData, setIssueData] = useState([] as issueData[]);

  const [isLoading, setIsLoading] = useState(true);

  const getPosts = useCallback(
    async (query: string = "") => {
      try {
        setIsLoading(true);
        const response = await api.get(
          `/search/issues?q=${query}%20repo:JoaoSBrito/githubblog`
        );

        setIssueData(response.data.items);
      } finally {
        setIsLoading(false);
      }
    },
    [issueData]
  );

  const fetchData = async () => {
    try {
      const response = await api.get("/users/JoaoSBrito");
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  // console.log(data);

  const fetchIssueData = async () => {
    try {
      const resp = await api.get("/repos/JoaoSBrito/githubblog/issues");
      setIssueData(resp.data);
    } catch (err) {
      // console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
    fetchIssueData();
    getPosts();
  }, []);

  return (
    <GitblogContext.Provider value={{ data, issueData, getPosts }}>
      {children}
    </GitblogContext.Provider>
  );
}
