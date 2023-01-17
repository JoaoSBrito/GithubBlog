import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GitblogProvider } from "./context/GitblogContext";
import { CompletePost } from "./pages/CompletePost";
import { Home } from "./pages/Home";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />

        <GitblogProvider>
          <Router />
          {/* <Home />
          <CompletePost /> */}
        </GitblogProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
