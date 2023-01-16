import { useContext } from "react";
import { GitblogContext } from "../../../../context/GitblogContext";
import { CardContainer, PostCardsContainer } from "./styles";
import ptBR from "date-fns/locale/pt-BR";
import { formatDistanceToNow } from "date-fns";

export function PostCards() {
  const { issueData } = useContext(GitblogContext);

  return (
    <PostCardsContainer>
      {issueData.map((issue) => {
        return (
          <CardContainer>
            <div className="title">
              <h3>{issue.title}</h3>
              <span>
                {formatDistanceToNow(new Date(issue.created_at), {
                  addSuffix: true,
                  locale: ptBR,
                })}
              </span>
            </div>

            <div className="content">
              {" "}
              <p>{issue.body}</p>
            </div>
          </CardContainer>
        );
      })}
    </PostCardsContainer>
  );
}
