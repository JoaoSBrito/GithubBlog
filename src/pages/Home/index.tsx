import { useContext } from "react";
import { Header } from "../../components/Header";
import { GitblogContext } from "../../context/GitblogContext";
import { PostCards } from "./components/PostCards";
import { Profile } from "./components/Profile";
import { SearchForm } from "./components/SearchForm";
import { HomeContainer } from "./styles";

export function Home() {
  const { issueData } = useContext(GitblogContext);
  return (
    <>
      <Header />

      <HomeContainer>
        <Profile />
        <div className="content">
          <div className="title">
            <h2>Publicações</h2>
            <p>
              {issueData.length}
              {"  "}
              Publicações
            </p>
          </div>

          <SearchForm />
          <PostCards />
        </div>
      </HomeContainer>
    </>
  );
}
