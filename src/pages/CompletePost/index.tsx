import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { api } from "../../lib/axios";
import { PostContent } from "./PostContent";
import { PostHeader } from "./PostHeader";
import { CompletePostContainer } from "./styles";

export interface issueData {
  id: string;
  title: string;
  created_at: string;
  body: string;
  number: any;
  html_url: string;
  comments: number;
}

export function CompletePost() {
  const [postData, setPostData] = useState<issueData>({} as issueData);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  const getDetails = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await api.get(
        `/repos/JoaoSBrito/githubblog/issues/${id}`
      );

      setPostData(response.data);
    } finally {
      setIsLoading(false);
    }
  }, [postData]);

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <>
      <Header />

      <CompletePostContainer>
        <PostHeader postData={postData} />
        <PostContent postData={postData} />
      </CompletePostContainer>
    </>
  );
}
