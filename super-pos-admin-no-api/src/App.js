import { AppContextProvider, useAppContext } from "./context/AppContextProvider";
import RouteInitializer from "./router/RouteInitializer";
import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "@material-ui/styles";
import { darkTheme, lightTheme } from "./theme/appThemes";

const queryClient = new QueryClient();

function App() {
  const [{isDark}, dispatch] = useAppContext()

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <QueryClientProvider client={queryClient}>
            <RouteInitializer />
            <ReactQueryDevtools />
        </QueryClientProvider>
    </ThemeProvider>


  );
}

export default App;
