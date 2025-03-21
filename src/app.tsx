import { ThemeProvider } from "./components/theme-provider";
import { Router } from "./routes/router";

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="platform-testing-theme">
      <Router />
    </ThemeProvider>
  );
}
