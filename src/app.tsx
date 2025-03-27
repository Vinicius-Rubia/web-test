import { Provider } from "react-redux";
import { ThemeProvider } from "./components/theme-provider";
import { Router } from "./routes/router";
import { store } from "./store";

export function App() {
  return (
    <Provider store={store}>
      <ThemeProvider defaultTheme="dark" storageKey="platform-testing-theme">
        <Router />
      </ThemeProvider>
    </Provider>
  );
}
