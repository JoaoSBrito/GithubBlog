import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { IssueData } from "../../context/GitblogContext";
import { api } from "../../lib/axios";
import { PostContent } from "./components/PostContent";
import { PostHeader } from "./components/PostHeader";
import { CompletePostContainer } from "./styles";

export function Post() {
  const [postData, setPostData] = useState<IssueData>({} as IssueData);
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
