import { Header } from "../../components/Header";
import { Post } from "./Post";
import { CompletePostContainer } from "./styles";

export function CompletePost() {
  return (
    <>
      <Header />

      <CompletePostContainer>
        <Post />
      </CompletePostContainer>
    </>
  );
}
