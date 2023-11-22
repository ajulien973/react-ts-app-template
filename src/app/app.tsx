import styles from "./app.module.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = (): JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      <main className={styles.main}></main>
    </QueryClientProvider>
  );
};

export default App;
