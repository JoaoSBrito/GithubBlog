import { Header } from "../../components/Header";
import { PostCards } from "./components/PostCards";
import { Profile } from "./components/Profile";
import { SearchForm } from "./components/SearchForm";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <>
      <Header />

      <HomeContainer>
        <Profile />
        <div className="content">
          <div className="title">
            <h2>Publicações</h2>
            <p>6 Publicações</p>
          </div>

          <SearchForm />
          <PostCards />
        </div>
      </HomeContainer>
    </>
  );
}
