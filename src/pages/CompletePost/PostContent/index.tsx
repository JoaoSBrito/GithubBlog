import ReactMarkdown from "react-markdown";
import { issueData } from "..";
import { PostContentContainer } from "./styles";

interface postDataProps {
  postData: issueData;
}

export function PostContent({ postData }: postDataProps) {
  const formattedText = postData.body;
  return (
    <PostContentContainer>
      <ReactMarkdown children={formattedText} />
    </PostContentContainer>
  );
}
