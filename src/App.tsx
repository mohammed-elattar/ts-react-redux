import "./App.css";
import { Provider } from "react-redux";
import { store } from "./state";
import RepositoresList from "./components/RepositoresList";

const App = () => {
  return (
    <Provider store={store}>
      <h1>Search for a package</h1>
      <RepositoresList />
    </Provider>
  );
};

export default App;
