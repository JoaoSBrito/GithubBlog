import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { GitblogContext, IssueData } from "../../../../context/GitblogContext";
import { PostHeaderContainer, PostHeaderContent } from "./styles";

import { formatDistanceToNow } from "date-fns";

import ptBR from "date-fns/locale/pt-BR";

interface PostDataProps {
  postData: IssueData;
}

export function PostHeader({ postData }: PostDataProps) {
  const { data } = useContext(GitblogContext);

  console.log(postData.created_at);

  // const formattedData = formatDistanceToNow(new Date(postData?.created_at), {
  //   addSuffix: true,
  //   locale: ptBR,
  // });

  const createdAt = postData?.created_at
    ? new Date(postData.created_at)
    : new Date();
  const formattedData = formatDistanceToNow(createdAt, {
    addSuffix: true,
    locale: ptBR,
  });

  return (
    <PostHeaderContainer>
      <a className="link back" href="/">
        <FontAwesomeIcon icon={faChevronLeft} />
        Voltar
      </a>
      <a className="link git" href="https://github.com/JoaoSBrito">
        ver no Github
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
      </a>

      <PostHeaderContent>
        <h1> {postData.title} </h1>

        <div className="userInfos">
          <a className="userInfo" href="#">
            <FontAwesomeIcon icon={faGithub} color={"#3A536B"} />
            {data.login}
          </a>

          <a className="userInfo">
            <FontAwesomeIcon icon={faCalendarDay} color={"#3A536B"} />
            {formattedData}
          </a>

          <a className="userInfo" href="#">
            <FontAwesomeIcon icon={faComment} color={"#3A536B"} />
            {postData.comments} comentários
          </a>
        </div>
      </PostHeaderContent>
    </PostHeaderContainer>
  );
}
