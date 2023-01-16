import {
  faArrowUpRightFromSquare,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { GitblogContext } from "../../../context/GitblogContext";
import { PostContainer, PostContent } from "./styles";

export function Post() {
  const { issueData, data } = useContext(GitblogContext);

  return (
    <PostContainer>
      {/* <PostContent> */}
      {issueData.map((issue) => {
        return (
          <PostContent>
            <h1>{issue.title}</h1>
          </PostContent>
        );
      })}
      {/* </PostContent> */}
      <a className="link" href="https://github.com/JoaoSBrito">
        <FontAwesomeIcon icon={faChevronLeft} />
        Voltar
      </a>

      <a className="link" href="https://github.com/JoaoSBrito">
        Github
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
      </a>
    </PostContainer>
  );
}
