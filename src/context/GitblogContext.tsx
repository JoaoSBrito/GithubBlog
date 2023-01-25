import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useParams } from "react-router-dom";
import { api } from "../lib/axios";

interface GitblogProviderProps {
  children?: ReactNode;
}

export interface IssueData {
  id: number;
  body: string;
  created_at: string;
  title: string;
  number: string;
  comments: string;
  // user: {
  //   name: string;
  //   login: string;
  //   followers: number;
  //   avatar_url: string;
  //   company?: string;
  //   bio?: string;
  // };
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
  issues: IssueData[];
  getPosts: (query?: string) => void;
}

// interface userData {
//   name: string;
//   login: string;
//   followers: number;
//   avatar_url: string;
//   company?: string;
//   bio?: string;
// }

// interface issueData {
//   id: string;
//   title: string;
//   created_at: string;
//   body: string;
//   number: any;
//   html_url: string;
//   comments: number;
// }

// interface GitblogContextType {
//   data: userData;
//   issueData: issueData[];
//   getPosts: (query?: string) => void;
// }

export const GitblogContext = createContext({} as GitblogContextType);

export function GitblogProvider({ children }: GitblogProviderProps) {
  // const [issueData, setIssueData] = useState([] as issueData[]);
  // const [postData, setPostData] = useState([]);

  const [issues, setIssues] = useState([] as IssueData[]);
  const [data, setData] = useState<userData>({} as userData);

  const [isLoading, setIsLoading] = useState(true);

  const getPosts = useCallback(
    async (query: string = "") => {
      try {
        setIsLoading(true);
        const response = await api.get(
          `/search/issues?q=${query}%20repo:JoaoSBrito/githubblog`
        );

        setIssues(response.data.items);
      } finally {
        setIsLoading(false);
      }
    },
    [issues]
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
      setIssues(resp.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPosts();
    fetchData();
    fetchIssueData();
  }, []);

  return (
    <GitblogContext.Provider value={{ issues, data, getPosts }}>
      {children}
    </GitblogContext.Provider>
  );
}
