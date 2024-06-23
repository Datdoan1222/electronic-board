import "./App.scss";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AppRoutes from "./routes/AppRoutes";
import Notiflix from "notiflix";

Notiflix.Notify.init({
  fontFamily: "Montserrat",
  fontSize: "16px",
  timeout: 1000,
});

const queryClient = new QueryClient();
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <AppRoutes />
        </QueryClientProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
