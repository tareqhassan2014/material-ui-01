import FloatingActionButton from "./components/flotingActionButton/FloatingActionButton";
import { ThemeProvider } from "@mui/material/styles";
import Header from "./components/header/Header";
import theme from "./components/theme/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <p>hello</p>
      <FloatingActionButton />
    </ThemeProvider>
  );
}

export default App;
