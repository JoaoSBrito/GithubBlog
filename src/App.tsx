import { ThemeProvider } from "styled-components";
import { GitblogProvider } from "./context/GitblogContext";
import { CompletePost } from "./pages/CompletePost";
import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <GitblogProvider>
        <Home />
        {/* <CompletePost /> */}
      </GitblogProvider>
    </ThemeProvider>
  );
}

export default App;
