import { AppProvider } from "./providers/app.provider";
import { AppRoutes } from "./routes/app-router";

export function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}
