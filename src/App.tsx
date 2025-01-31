import "./App.scss";
import Pagination from "./components/Pagination";
import PostList from "./components/PostList";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <AppProvider>
      <PostList />
      <Pagination />
    </AppProvider>
  );
}

export default App;
