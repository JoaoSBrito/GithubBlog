import { Header } from "../../components/Header";
import { PostHeader } from "./PostHeader";
import { CompletePostContainer } from "./styles";

export function CompletePost() {
  return (
    <>
      <Header />

      <CompletePostContainer>
        <PostHeader />
      </CompletePostContainer>
    </>
  );
}
