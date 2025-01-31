import "./App.scss";
import Pagination from "./components/Pagination";
import PostList from "./components/PostList";
import Searcher from "./components/Searcher";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <AppProvider>
      <Searcher />
      <PostList />
      <Pagination />
    </AppProvider>
  );
}

export default App;
