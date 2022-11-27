import { useImmerReducer } from "use-immer";
import SimpleReducer from "reducers/SimpleReducer";

const useApp = () => {
  const [state, dispatch] = useImmerReducer(SimpleReducer, {});

  return { appState: state, setAppState: dispatch };
};

export default useApp;
