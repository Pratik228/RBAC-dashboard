import { RouterProvider } from "react-router-dom";
import router from "./routes";
import ErrorBoundary from "./components/ErrorBoundary";
import { UsersProvider } from "./context/UsersContext";

function App() {
  return (
    <UsersProvider>
      <ErrorBoundary>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </UsersProvider>
  );
}

export default App;
