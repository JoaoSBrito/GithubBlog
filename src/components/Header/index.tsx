import Logo from "../Logo";
import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <div className="logo">
        <Logo />
      </div>
    </HeaderContainer>
  );
}
