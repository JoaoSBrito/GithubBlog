import ReactMarkdown from "react-markdown";
import { IssueData } from "../../../../context/GitblogContext";
import { PostContentContainer } from "./styles";

interface postDataProps {
  postData: IssueData;
}

export function PostContent({ postData }: postDataProps) {
  const formattedText = postData.body;
  return (
    <PostContentContainer>
      <ReactMarkdown children={formattedText} />
    </PostContentContainer>
  );
}
