import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useCallback, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { allData, GitblogContext } from "../../../context/GitblogContext";
import { api } from "../../../lib/axios";
import { PostHeaderContainer, PostHeaderContent } from "./styles";

export function PostHeader() {
  const { issueData, data } = useContext(GitblogContext);

  const { id } = useParams();
  const item = issueData.find((i) => i.number === i.number);

  return (
    <PostHeaderContainer>
      <a className="link back" href="/">
        <FontAwesomeIcon icon={faChevronLeft} />
        Voltar
      </a>
      <a className="link git" href="https://github.com/JoaoSBrito">
        ver no Github {id}
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
      </a>

      <PostHeaderContent>
        <h1> {item?.title} </h1>

        <div className="userInfos">
          <a className="userInfo" href="#">
            <FontAwesomeIcon icon={faGithub} color={"#3A536B"} />
            {data.login}
          </a>

          {/* <a className="userInfo" href="#">
            <FontAwesomeIcon icon={faCalendarDay} color={"#3A536B"} />
            {formatDistanceToNow(new Date(item?.created_at), {
              addSuffix: true,
              locale: ptBR,
            })}
          </a> */}

          <a className="userInfo" href="#">
            <FontAwesomeIcon icon={faComment} color={"#3A536B"} />
            {item?.comments} comentários
          </a>
        </div>
      </PostHeaderContent>

      {/* {datas.issuesData.title} */}

      {/* <PostHeaderContent>
        <h1>{postData?.issuesData.title}</h1>
      </PostHeaderContent> */}

      {/* <PostHeaderContainer>
        <h1>{post}</h1>
      </PostHeaderContainer> */}

      {/* {issueData.map((issue) => {
        return (
          <PostHeaderContent key={issue.id}>
            <h1>{issue.title}</h1>

            <div className="userInfos">
              <a className="userInfo" href="#">
                <FontAwesomeIcon icon={faGithub} color={"#3A536B"} />
                {data.login}
              </a>

              <a className="userInfo" href="#">
                <FontAwesomeIcon icon={faCalendarDay} color={"#3A536B"} />
                {formatDistanceToNow(new Date(issue.created_at), {
                  addSuffix: true,
                  locale: ptBR,
                })}
              </a>

              <a className="userInfo" href="#">
                <FontAwesomeIcon icon={faComment} color={"#3A536B"} />
                {issue.comments} comentários
              </a>
            </div>
          </PostHeaderContent>
        );
      })} */}
    </PostHeaderContainer>
  );
}
