import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";

function App() {
  return (
    <div className="app-container d-flex">
      <Sidebar />
      <div className="content flex-grow-1 d-flex flex-column">
        <Header />
        <div className="flex-grow-1 p-3">
          <CreatePost />
          <PostList />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
