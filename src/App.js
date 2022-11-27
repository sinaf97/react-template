import React from "react";
import useApp from "hooks/useApp";
import { AppProvider } from "contexts/AppContext";
import { useRoutes } from "react-router-dom";
import routes from "routes";

function App() {
  const { appState, setAppState } = useApp();
  const content = useRoutes(routes);

  return (
    <React.Fragment>
      <AppProvider value={{ appState, setAppState }}>{content}</AppProvider>
    </React.Fragment>
  );
}

export default App;
